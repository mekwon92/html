const arr = [10,20,30,40,50];

arr.filter(x => x % 20 != 0); // 10, 30, 50 (배열 형태는 아님)
// arr.filter(x => x % 20 != 0).forEach(x=>console.log(x));

arr.filter(x => x % 20 != 0).map(x => x ** 2 / 10).forEach(x => console.log(x));