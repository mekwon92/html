var name = '윤석렬';
var age = 60;

var strings = '대통령 ' + name + "은 나이가 " + age + "살 입니다.";
console.log(strings);

// 백틱 : pre처럼 ~ 포매터처럼~?
strings = `
    대통령 ${name}은
    나이가 ${age}살 입니다.
`;
console.log(strings);

// >= : 크거나 같다
// a += b : 더해서 대입한다

a = 10;
b = "10";

if(a == b) {
    console.log('핫하');
}

if(a === b) {
    console.log('홋호');
}
// 이거 두개는 같은거 알겠니!?
// a === b
// !(a !== b)

if(a !== b) {
    console.log('낄끼');
}

console.log(2 ** 3);

//배열 리터럴
// var arr = [];

//10개의 공간을 가지는 배열
var arr = new Array(10);

//10과 20을 값으로 가지는 2칸의 배열
// var arr = new Array(10, 20);

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
