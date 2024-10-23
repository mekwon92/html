const now = new Date();
console.log(now); //UTC 브라우저는 GMT+9
console.log(now.getFullYear(), now.getMonth()+1, now.getDate());
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

console.log(now.getTime()); //에포크타임
console.log(now.getDay()); //요일값

// getDay를 사용하여 현재의 요일을 한글로 출력 0~6
console.log(now.getDay());

const days = ['일','월','화','수','목','금','토'];
console.log(days[now.getDay()]);

console.log();


switch(now.getDay()){
    case 0: 
        console.log("일");
        break;
    case 1: 
        console.log("월");
        break;
    case 2: 
        console.log("화");
        break;
    case 3: 
        console.log("수");
        break;
}    

console.log(now.getTimezoneOffset());

// 정규식
const regExp = /[A-Za-z0-9]/gi;
