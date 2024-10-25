var num = [1,2,3];
var sum = 0;

num.forEach(v=> sum += v);

console.log(sum);


const arr = [10, 20, 30, 40, 50];

arr.filter(x => x % 20 != 0).map(x => x**2 / 10).forEach(x => sum += x);

console.log(sum);

