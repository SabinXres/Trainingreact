//map()
const nums=[1,2,3];
const d=nums.map(n => n*2);
//filter()

const e=nums.filter(n=>n%2===0);
//reduce()
const sum= nums.reduce((acc,n=> acc + n,0));
//find and findindex
const users=[{id:1},{id:2}];
users.find(u=> u.id===2);
users.findIndex(u=> u.id===2);
//some() returns true if at least on codntion ture and every() all elements is trure
nums.some(n=>n>10);
nums.every(n=>n>0);
//push()=add end pop()=remove end item shift()=remove start unshift=add start
//imutable= doesnt change original array //mutable=changes
const arr=[1,2,3];
arr.push(4);
arr.pop();
//arr.shift();
//arr.unshift(54);

