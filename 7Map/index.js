//Map字典；键值对形式唯一的数据结构

//Map的增删改查


const m=new Map()

//增加
m.set('a','aa')
m.set('b','bb')
m.set('c','cc')

//修改
console.log('修改前',m.get('a'))
m.set('a','修改aa')
console.log('修改后',m.get('a'))
//删除
console.log('删除d前',m.get('b'))
m.delete('b')
console.log('删除d后',m.get('b'))
//查询
m.get('c')








