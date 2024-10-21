var arr = [];
arr.push(10);
arr.push(30);
arr.push(5);
arr.push(20);
arr.unshift(40);
console.log(arr);

arr.splice(1, 0,'f');
console.log(arr);

arr.reverse();
console.log(arr);

arr.sort();
console.log(arr);

console.log(typeof arr[5]);
