//배열 리터럴
// var arr = [];

//10개의 공간을 가지는 배열
var arr = new Array(10);

//10과 20을 값으로 가지는 2칸의 배열
// var arr = new Array(10, 20);

//배열 안에 오만가지 타입을 다 넣을 수 있음
arr[0] = 10;
arr[1] = 'abcd';
arr[2] = true;
arr[3] = undefined;
arr[4] =[1,2,3,4];
arr[5] ={x:10, y:20};

console.log(arr);

arr[5].x = 30;

console.log(arr[5].y); // 20
console.log(arr[5]['x']); // 30

console.log(arr[4][2]); // 3

arr.length = 20;
console.log(arr.length); // 20

console.log(arr);
console.log(arr[100]); //undefined

arr[99]=1234;
console.log(arr); //가변배열이라 가능한........?!

arr.length = 2;
console.log(arr);
console.log(arr[2]); 

//JSON : 객체배열숫자문자열널 (언디파인드x)
//객체는 키와 값으로 구성. 블록 안 (카카오개발자센터-rest api)
