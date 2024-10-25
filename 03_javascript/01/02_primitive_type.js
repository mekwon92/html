// datatype
// 기본 데이터 타입 number string boolean 형변환이 쉬움
// 원시 데이터 타입 number string boolean undefined symbol
// 객체 데이터 타입 object, function, array

// JS의 변수 타입은 할당 시점에 결정된다. (자바의 경우 변수 선언시에 타입체크를 함)
var num = 10;
var str = 'A';
num = 20;
num = true;

// undefined 변수는 선언되었지만 값이 정의되지 않음
// not defined 변수 정의를 안함
var num1;
console.log(num1); //undefined
// console.log(num2); //not defined

// 연산자는 피연산자를 가린다
console.log(!("35" + 2 ) / 2);
// "35"+2 는 문자열 352임 여기에 !을 사용해서 0이되는것~
// 빈문자열은 0 나머지는 1 
// 0 나누기 2는 0


var name = '윤석렬';
var age = 60;

var strings = '대통령 ' + name + "은 나이가 " + age + "살 입니다.";
console.log(strings);

// 백틱 : pre처럼 ~ 포매터처럼~
strings = `
    대통령 ${name}은
    나이가 ${age}살 입니다.
`;
console.log(strings);


// 타입확인 : 단항연산자(반환값:문자열)
var num = 10;
console.log(typeof num == "number"); //true

num = String(num);
console.log(num, typeof num); //10 string

num = Boolean(String(num));
console.log(num, typeof num); //true boolean

var num = 10;
if(num) {
}

//숫자 : 0일때 거짓 !0=true
for(var i = 10; i--; ) { //조건이 참인동안 실행
    console.log(i);
}

//문자열을 숫자로 바꾸고 싶으면 -0 *1 %1 하면 됨
//숫자를 문자열로 바꾸고 싶으면 +"" 하면 됨
num = "1234";
num /= 1;

console.log(num, typeof num); //1234 number

//문자열이나 숫자를 boolean으로 바꾸고 싶으면 !!(이중부정)
num = !!num;

//0은 거짓이지만, "0"은 참
num = "0";
num = !!num;
console.log(num, typeof num); //true boolean

//boolean -> 문자열
num +='';
console.log(num, typeof num); // true string

//문자열을 숫자로 변경하려면 ? NaN:Not a Number
// 형변환하는 경우 NaN을 볼 경우가 있다
num = "abcd";
num /= 1;
console.log(num, typeof num); // NaN number

console.log(3/0, 0/0, 0/2); //Infinity NaN 0

console.log(!("35" + 2 ) / 2); //0



// Boolean false가 오는 경우
// 문자열 : 빈문자열 ""
// 숫자 : 0
// 객체 : null                   null은 object이다. null : 객체의 주소가 없는 상태
// 함수 : 함수는 무조건 참.      함수는 1급 객체 first class object (함수 파라미터 기본값은 null)
// undefined : 항상 거짓

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