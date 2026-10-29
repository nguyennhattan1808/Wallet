try {
  const {mount} = await import('./finance.js');
  mount();
} catch (error) {
  const root = document.getElementById('finance-root');
  root.innerHTML = '<div class="card sign-in"><h1>Chưa tải được Wallet</h1><p>Hãy kiểm tra mạng rồi tải lại trang. Ứng dụng cần mạng để đăng nhập và đồng bộ dữ liệu.</p><button class="btn primary" id="retry">Tải lại</button></div>';
  document.getElementById('retry').onclick = () => location.reload();
  console.error(error);
}
