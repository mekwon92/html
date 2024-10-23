// 함수를 타입으로 전달, 반환..?
var f = function(x) {
    return x;
}

console.log(f);
console.log(typeof f); //function
console.log(typeof f(10)); //number
console.log(typeof f([10,20,30,40])); //object
console.log(typeof f({x:10, y:20})); //object
console.log(typeof f(undefined));// undefined

function myFunc() {
    console.log("핫하");
}



console.log(typeof f(myFunc())); // 호출 : undefined가 전달...... why? return값이 없응께
console.log(typeof f(myFunc)); // 전달 : function
f(myFunc);
f(myFunc)(); //핫하
// 콜백 : 파라미터로 전달되는 함수
 
// myFunc 함수를 인자로 f에 전달합니다.
// f는 myFunc를 그대로 반환합니다. 
// 즉, f(myFunc)는 이제 myFunc를 참조하는 함수가 됩니다.

// (); 반환된 함수를 즉시 실행합니다. 즉, myFunc가 호출됩니다.

// "핫하"라는 메시지가 콘솔에 출력됩니다. 이는 myFunc가 실행되었기 때문입니다.



// scope
// 지역변수 : 함수 내에서 선언한 변수 . 함수 호출을 동반해야 함
// 전역변수 : 지역변수가 아닌 변수

// var b = 20; // 전역 변수

function test() {
    console.log(a);
    var a = 10;
    console.log(a);         
    // console.log(b);    
    b = 30;  // 지역 위치에서 전역을 만든것....? 이렇게 되는걸 주의해야함
    //글로벌스코프?
}

test();
console.log(b);


{{{{{{{{var num = 30;}}}}}}}}
console.log(num);

// var : 함수 레벨 스코프!함수 안쪽에 있는 건 관대함
function f1(){
    var local = 30;
    function f2() {
        console.log(local);
    }
    f2();
}
f1();

// 재선언 가능
var a = 10;
var a = 20;

// let : 블럭 레벨 스코프 ! 재선언 불가능

console.log(numb); // HOISTING 대상이 되지 않음
// cannot access 'number' before initializaion이라고 뜸. undefined는 아님.

let numb = 20;
// 참고하기 https://ui.toast.com/weekly-pick/ko_20191014
// 2번 변수 선언은 무조건 let으로 하자


for(let s = 0; s < 10; s++) {
    console.log(s);
}
// console.log(s); not defined

let fn = function(x) {
    console.log("hello"+x);
}

fn("world");

// java : final double PI = Math.PI;
// const PI; 불가능함. 값을 지정해줘야함. 
// const PI = undefined; 지정해주기 싫을 때는 이렇게 해야함
const PI = Math.PI;
//PI = 3.14; 불가능

let n1 = 0;
function increaseCount() {
    n1++;
    return n1;
}
console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());

// closure : 지역변수가 함수 종료 후에도 남아 있는 현상
// closure 동작의 최소 조건 : 함수를 리턴해야만 사용 가능!
// 전역 변수를 접근하지 않기 위해 사용하는 것 - 모듈화, 유지보수 용이

// geolocation에 사용(콜백을 덜해도 됨..) 프로미스도 콜백때 사용??????어싱크????

function increaseCount2() {
    let n2 = 0;
    function inner(){
        n2++;
        return n2;
    }
    return inner;
}

// let tmp = increaseCount2();


let tmp = function() {
    let n2 = 0;
    return function() {
        n2++;
        return n2;
    };
}();


console.log(tmp());
console.log(tmp());
console.log(tmp());


//스택오버플로우 재귀함수는 쓰지말자
// function f() {
//     f();
// }
// f();

console.log(this); // {}

console.log(parseInt("123.45abasdf324233")); // 하는데까지만
console.log(Number("12345abasdf324233")); // NaN터짐
console.log(parseFloat("123.456abasdf324233")); // 123.456


//finish
//finity (유한)
//NaN, Infinity
let nan = NaN;
let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;

console.log(nan);
console.log(posiInfi);
console.log(negaInfi);

console.log(typeof nan);
console.log(typeof posiInfi);
console.log(typeof negaInfi);

console.log(nan === nan); //DB의 null.. unkwown과 같은...
console.log(!!nan);

//NaN을 확인할 방법은 하나뿐...진짜 자주씀~
console.log(isNaN(nan));

console.log("=============================================")
console.log(posiInfi == Infinity); //true
console.log(negaInfi == Infinity); //false
console.log(isFinite(posiInfi)); //false 유한하냐 묻는거니까

//보안에 취약해서 쓰면 안됨. 문자열을 받아 소스코드 동작 
eval("let str = 'hello'; console.log(str);");

// Uniformed Resource
// URI(identifier) : 상위개념.
// URL(locator) : 자원의 위치+자원에 대한 고유 식별자
// http://www.javaman.com/post/view?123 ... uri형태 path variable (더 추상적인..http 메서드로 구분)
// http://www.javaman.com/post/view?no=123... url형태 query parameter

let str = 'http://www.javaman.com/search?query=http://www.네이버.com#abcd';
console.log(encodeURI(str)); // uri로써의 자격을 갖추고있나...? query string parameter 변경
console.log(encodeURIComponent(str)); //query 에서 사용하기위한 변환

let resultStr = decodeURIComponent(''); //URL ,URI 복호화....

// encodeURI
// 목적: 전체 URI를 인코딩할 때 사용합니다.
// 인코딩 대상: URL의 기본 구조(예: 프로토콜, 호스트, 경로, 쿼리 문자열 등)를 유지하면서, 공백이나 특정 특수문자(예: #, ?, &)는 인코딩하지 않습니다.


// encodeURIComponent
// 목적: URI의 구성 요소(특히 쿼리 파라미터)를 인코딩할 때 사용합니다.
// 인코딩 대상: 모든 특수 문자를 인코딩하여, URI의 의미를 손상시키지 않습니다. 쿼리 파라미터 값으로 사용할 수 있도록 안전하게 인코딩합니다.

let obj = {x:10, y:"abcd", z:function() {}};
// 메서드 : 객체 내에 종속된 함수


//클래스 : 잘 안쓰긴함
class Student {
}
let student = new Student();