import {validate} from './ledger.mjs';
export function deleteCategory(data,id,replacementId=''){
 const next=JSON.parse(JSON.stringify(data)),category=next.categories.find(c=>c.id===id);
 if(!category)throw Error('Không tìm thấy danh mục.');
 const used=next.entries.some(e=>e.categoryId===id)||Object.values(next.budgets).some(b=>Object.hasOwn(b,id));
 if(used){const target=next.categories.find(c=>c.id===replacementId&&c.id!==id&&c.type===category.type&&!c.archived);if(!target)throw Error('Chọn danh mục thay thế cùng loại.');
 for(const e of next.entries)if(e.categoryId===id)e.categoryId=target.id;
 for(const budget of Object.values(next.budgets))if(Object.hasOwn(budget,id)){budget[target.id]=(budget[target.id]||0)+budget[id];delete budget[id];}}
 next.categories=next.categories.filter(c=>c.id!==id);validate(next);return next;
}
