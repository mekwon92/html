//생성자함수 : 프로토타입으로 재정의 해야함
//class : 자동으로 프로토타입이 됨 es6

//class보다 함수 사용을 더 많이 함

class Student {
    constructor(no, name, score) {
        this._no = no;
        this.name = name;
        this.score = score;
    }
    toString() {
        return `학번 : ${this._no}`
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get no() {
        return this._no;
    }
    set no(n) {
        if(n < 0){
            return;
        }
        this._no = n;
    }
}
const student = new Student(1, '말똥이', 100);
console.log(student);

//get set은 필드처럼 쓰지만 실제 구조는 메서드임
console.log(student.getName);
student.setName = '소똥이';
console.log(student.getName);

console.log(student.no);
student.no = 2;
console.log(student.no);

//프로토타입은 객체 기본요소에는 포함이 안됨
//for in으로는 프로토타입 확인 가능
console.log(student); // class니까 toString은 프로트타입이라 안보임
console.log(student.toString());

for(let i in student){
    console.log(i);   
}