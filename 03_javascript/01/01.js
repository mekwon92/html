// JS에서 생성자
var s = {x:10, z:true, no:10}; // 초기값 설정

s.no = 20;
s.name = "이재용";
s.kor = 80;
s.eng = 80;
s.math = 60;

s.total = function() {
    return this.kor + this.eng + this.math;
}

console.log(s.no);
// 필드 제거 : delete
delete s.no;

console.log(s);
console.log(s.no);
// undefined임. s는 있다. 다만 프로퍼티 no가 없다!
console.log(s.total());

// java : 블록 레벨 스코프
// JS : 함수 레벨 스코프
// 함수가 변수다??!

var num = 10;
// num = "10";
num = String(num);

console.log(typeof num == "number"); //true임~!
console.log(num, typeof num); // 타입확인 : 단항연산자. 대상 피연산자의 타입을 문자열로 반환

num = Boolean(String(num));
console.log(num, typeof num);

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

console.log(num, typeof num);

//문자열이나 숫자를 boolean으로 바꾸고 싶으면 !!(이중부정)
num = !!num;



//0이라는 숫자는 거짓, "0"이라는 문자열은 참
num = "0";
num = !!num;
console.log(num, typeof num);

//boolean -> 문자열
num +='';
console.log(num, typeof num);

//문자열을 숫자로 변경하려면 ? NaN:Not a Number
num = "abcd";
num /= 1;
console.log(num, typeof num); 

console.log(3/0, 0/0); //Infinity NaN
// 형변환하는 경우 NaN 을 볼 경우가 있다~!

console.log(!("35" + 2 ) / 2);


// 다른 데이터 타입이 논리 연산중 false가 오는 경우
// 문자열 : 빈문자열 ""
// 숫자 : 0
// 객체 : null                   null은 object이다. null : 객체의 주소가 없는 상태
// 함수 : 함수는 무조건 참.      함수는 1급 객체 first class object (함수 기본값은 null?)
// undefined : 항상 거짓

function f(x) {
    x();
}

function call() {
    console.log("call");
}
f(call);

function f2() {
    return function() {
        console.log("haha");  
    }
}

//선언과 호출을 정확히 구분할 수 있어야 함;
f2()();
//지역변수 : 함수가 호출될 때~끝날 때
//클로저를 통해 값을 남길 수 있음?렉싱턴..스코프..1급객체?