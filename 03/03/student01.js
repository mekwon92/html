
let kor;
let eng;
let mat;

let student1 = {no : 1, name : "머스크", kor : 90, eng : 80, mat:100, total : function(){
    return this.kor+this.eng+this.mat;
}
,avg : function() {
    return (this.kor+this.eng+this.mat) / 3;
}
,toString :function(){
    return `이름 : ${this.name} 총점 : ${this.total()} 평균 : ${this.avg()}`;
}};

let student2 = {no : 2, name : "주커버그", kor : 70, eng : 70, mat : 70, total : function(){
    return this.kor+this.eng+this.mat;
}
,avg : function() {
    return (this.kor+this.eng+this.mat)/3;
}
,toString :function(){
    return `이름 : ${this.name} 총점 : ${this.total()} 평균 : ${this.avg()}`;
}};

// console.log(student1);
// console.log(student1.total());

console.log(student1.toString());

const students = [];
students.push(student1);
students.push(student2);
console.log(students);

students.push({no : 3, name : "빌게이츠", kor : 50, eng : 100, mat:100, total : function(){
    return this.kor+this.eng+this.mat;
}

,avg : function() {
    return (this.kor+this.eng+this.mat)/3;
}
,toString :function(){
    return `이름:${this.name} 총점 : ${this.total()} 평균 : ${this.avg()}`;
}

});
console.log(students.toString());

//typescript MS 
//react 메타
//true+3?

function Student(no, name, kor, eng, mat){
    // let _no = no;//외부에서 접근 불가. private와 같은 역할. 캡슐화 구현
    //              //_ 를 통해 내부에서 사용한다는 걸 알려줌(잘 사용되지않음)
    // this.setNo = function(no){
    //     _no = no;
    // }
    // this.getNo = function(){
    //     return _no; //this없으면 전역변수
    // }
    this.no = no; //외부접근을 위해 this를 붙임
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.mat = mat;

    //전역변수, 지역변수, this구분
    this.total = function() {
        return this.kor+this.eng+this.mat;
    }
    this.avg = function() {
        return this.total() / 3;
    }
    this.toString = function() {
        return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    }
}

const now = new Date();
const student3 = new Student(4, "이재용", 100, 60, 60);
// console.log(student3.getNo());
// student3.setNo(10);
// console.log(student3.getNo());

//console.log(student3.no); 주석 풀면 접근불가
//console.log(student3._no);

students.push(student3);
students.push(new Student(5, '발머', 100, 100, 70));

// 변하지않는 값은 웬만하면 const 붙여야함

// 상속과 포함의 차이가 뭐니..?......
for(let i = 0; i < students.length; i++){
    console.log(students[i].total());   
}

//모든함수는 프로토타입이있다,,,,,,,,
//프로토타입은 함수를 통해 생성된 인스턴스로 접근....????
//생성자함수

//프로토 타입 : 객체만의 공간 (js에만 있는 개념. 메서드 저장 용도??)
Student.a = 10;
console.log(Student.a);
// console.log.prototype
Student.prototype.area = 20;
const student4 = new Student(6, '워즈니악', 90, 100, 100);
console.log(student4.area); // 20
console.log(student4.a); // undefined



