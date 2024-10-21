var name = '윤석렬';
var age = 60;

var strings = '대통령 ' + name + "은 나이가 " + age + "살 입니다.";
console.log(strings);

strings = `대통령 ${name}은 
나이가 ${age}살 입니다.
`;

console.log(strings);

a = 10;
b = '30';

if(a !== b) {
    console.log('낄끼');
}
