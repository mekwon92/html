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
};



console.log(typeof f(myFunc())); //undefined가 전달...... why? return값이 없응께
console.log(typeof f(myFunc)); //function

f(myFunc)(); //핫하

document.addEventListener("click",function() {
    //click시 할 일
});




