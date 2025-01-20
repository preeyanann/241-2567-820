//string , Number , Bolean , Odject , Array 
//String - ตัวอักษร
/*
let firstname = 'John';


let age = 30;
let hight = 180.5;

let isSingle = true;

console.log('Name', firstname, 'Age:', age,);
*/


let age = [18,13,20];
console.log('age is',ages);
ages.sort();
console.log('age is ', ages);

let name_list = ['John', 'BOb', 'Alice'];
name_list.push('David');
console.log('name_list is',name_list.length);
console.log('name_list is',name_list[0]);
console.log('name_list is',name_list[1]);
console.log('name_list is',name_list[2]);
console.log('name_list is',name_list[3]);

for (let index = 0; index < name_list.length; index++){
    console.log('for name_list is',name_list[index]);
}