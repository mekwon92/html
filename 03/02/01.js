// 1. 함수 
// hoist : 끌어올린다
// JS는 전체스캔해서 함수와 변수를 미리 정리함
// 함수는 전부 끌어 올리는데 변수는 선언만 끌어 올리고 값은 끌어올리지 않음

console.log(f(5)); // 여기서도 위치함

function f(x) {
    return x * x;
}

console.log(f(10));

console.log(abc); // undefined 
var abc = "1234";

// 2. 익명 함수 : 타입이 함수인 변수
// 변수 선언 후 타입이 함수인 대상을 할당
// 변수 선언 이전에 익명함수 호출 불가능
// f2(20); // 선언만 끌어올라감. undifined이기 때문에 호출은 불가능하고 이름참조만 가능
var f2 = function (x) {
    return x * x;
}


console.log(f2(20));
// $(); // 얘도 함수다~!

// java
// 변수 arr.length
// 메서드 str.length()

// SQL HTTP 반환&설정
// select getHttpPort() from dual; 함수
// exec setHttoPort(9090); 프로시저


//3. 즉시실행함수 : 1회용 목적으로 쓰는 익명함수. 익명클래스랑 비슷
console.log(function (x) {
    return x * x;
}(20));

(function(str) {
    console.log("hello"+str);  
})("javascript");

// 괄호 위치는 이렇게도 가능함
(function(str) {
    console.log("hello"+str);  
}("javascript"));

//화살표 함수로 변경
((str) => {
    console.log("hello" + str);
})("js");

function process() {
    var kor = 90;
    return; // 여기서 끝남 홍길동 학생의 평균은 undefined
    var mat = 70;
    var eng = 80;
    var avg = (kor + mat + eng) / 3;
    return avg;
}
console.log("홍길동 학생의 평균은 " + process());


// 두 수를 입력 받아 그 중 큰 값을 반환하는 함수
function max(x, y) {
    if(x > y){
        return x;
    }
    return y;
}

function max(a, b){
    return a > b ? a : b;
}

console.log(max(10, 5));

// 여러 수를 입력받아 그 중 큰 값을 반환하는 함수
//arguments : 배열 비스무리한..
function arg() {
   console.log(arguments);
   console.log(arguments.length);
}
arg(10, 20, 30, 40);

function max2() {
    var max = -Number.MAX_VALUE;
    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== "number"){
            return undefined;
        }

        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max == -Number.MAX_VALUE ? undefined : max;
}

//이런식으로 활용되나봄...?
document.addEventListener("click", function() {
    console.log("클릭했습니다!");
});