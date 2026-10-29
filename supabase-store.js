import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm';
import {SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY} from './config.js';
import {empty,validate} from './ledger.mjs';

const client=createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
let onReady=()=>{}, recovery=false;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const redirect=()=>new URL('./',location.href).href;
const problem=e=>new Error(e?.message||'Không kết nối được Supabase.');
client.auth.onAuthStateChange(event=>{
  if(event==='PASSWORD_RECOVERY'){
    recovery=true;
    setTimeout(()=>showAuth(onReady),0);
  }
});

export async function readLedger(){
  if(recovery)return null;
  const {data:{session},error}=await client.auth.getSession();
  if(error)throw problem(error);
  if(!session)return null;
  const {data,error:readError}=await client.from('wallet_data').select('payload,revision,updated_at').eq('user_id',session.user.id).maybeSingle();
  if(readError)throw problem(readError);
  if(!data)return {data:empty(),revision:0,history:[],updatedAt:null};
  const payload=data.payload;
  const ledger=payload.data??payload;
  validate(ledger);
  return {data:ledger,revision:data.revision,history:payload.history??[],updatedAt:data.updated_at};
}

export async function writeLedger(data,revision,action,oldHistory){
  validate(data);
  const {data:{user},error:authError}=await client.auth.getUser();
  if(authError||!user)throw new Error('Phiên đăng nhập đã hết. Hãy đăng nhập lại.');
  const updatedAt=new Date().toISOString();
  const history=[{revision:revision+1,action:String(action).slice(0,160),created_at:updatedAt},...oldHistory].slice(0,50);
  const row={payload:{data,history},revision:revision+1,updated_at:updatedAt};
  const query=revision===0
    ?client.from('wallet_data').insert({...row,user_id:user.id})
    :client.from('wallet_data').update(row).eq('user_id',user.id).eq('revision',revision);
  const {data:saved,error}=await query.select('revision,updated_at').maybeSingle();
  if(error?.code==='23505'||(!error&&!saved)){
    const e=new Error('Sổ đã thay đổi trên thiết bị khác. Tải mới trước khi tiếp tục.');e.conflict=true;throw e;
  }
  if(error)throw problem(error);
  return {revision:saved.revision,updatedAt:saved.updated_at,history};
}

export async function signOut(){
  const {error}=await client.auth.signOut();
  if(error)throw problem(error);
  recovery=false;
}

export function showAuth(ready){
  onReady=ready;
  const root=document.getElementById('finance-root');
  root.innerHTML=`<div class="card sign-in"><img src="./wallet-clay-v1-180.png" width="72" height="72" alt=""><h1>${recovery?'Đặt mật khẩu mới':'Mở Wallet của bạn'}</h1><p class="muted">Đăng nhập bằng email để đồng bộ sổ trên các thiết bị.</p><form id="auth-form" class="auth-form form">${recovery?'':`<label>Email<input name="email" type="email" autocomplete="email" required></label>`}<label>Mật khẩu<input name="password" type="password" minlength="8" autocomplete="${recovery?'new-password':'current-password'}" required></label><p id="auth-message" role="status" aria-live="polite"></p><div class="list-actions"><button class="btn primary" type="submit">${recovery?'Lưu mật khẩu':'Đăng nhập'}</button>${recovery?'':'<button class="btn" type="button" id="register">Tạo tài khoản</button><button class="btn ghost" type="button" id="reset">Quên mật khẩu?</button>'}</div></form><p class="note">Tài khoản này dành riêng cho Wallet, không cần đăng nhập ChatGPT.</p></div>`;
  const form=document.getElementById('auth-form'),message=document.getElementById('auth-message');
  async function submit(mode){
    if(mode!=='reset'&&!form.reportValidity())return;
    const email=form.elements.email?.value.trim(),password=form.elements.password.value;
    if(mode==='reset'&&(!email||!form.elements.email.reportValidity()))return;
    form.querySelectorAll('button').forEach(b=>b.disabled=true);message.textContent='Đang xử lý…';
    try{
      let result;
      if(recovery)result=await client.auth.updateUser({password});
      else if(mode==='register')result=await client.auth.signUp({email,password,options:{emailRedirectTo:redirect()}});
      else if(mode==='reset')result=await client.auth.resetPasswordForEmail(email,{redirectTo:redirect()});
      else result=await client.auth.signInWithPassword({email,password});
      if(result.error)throw result.error;
      if(mode==='reset'){message.textContent='Nếu email hợp lệ, liên kết đặt lại mật khẩu sẽ được gửi. Hãy kiểm tra cả thư rác.';return;}
      if(mode==='register'&&!result.data.session){message.textContent='Đã gửi yêu cầu đăng ký. Hãy mở email xác nhận rồi quay lại đăng nhập.';return;}
      recovery=false;await ready();
    }catch(e){message.innerHTML=escape(e.message||'Chưa thực hiện được. Vui lòng thử lại.');}
    finally{form.querySelectorAll('button').forEach(b=>b.disabled=false);}
  }
  form.onsubmit=e=>{e.preventDefault();submit('login');};
  document.getElementById('register')?.addEventListener('click',()=>submit('register'));
  document.getElementById('reset')?.addEventListener('click',()=>submit('reset'));
}
