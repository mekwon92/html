
// let kor;
// let eng;
// let mat;

// 객체 리터럴 : 객체를 직접 정의
// 간단하게 속성과 메소드를 한 번에 정의
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


// 생성자 함수
// 여러 개의 객체를 만들 때 사용하는 함수
// new 키워드와 함께 호출하여 새로운 객체를 생성
// 초기화할 속성이나 메소드를 정의

function Student(no, name, kor, eng, mat){
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
    // this.toString = function() {
    //     return `이름 : ${this.name}, 총점 : ${this.total()}, 평균 : ${this.avg()}`;
    // }
}

const now = new Date();
console.log(now);

students.push(new Student(5, '발머', 100, 100, 70));

// 변하지않는 값은 웬만하면 const 붙여야함

// 상속과 포함의 차이가 뭐니..?......
for(let i = 0; i < students.length; i++){
    console.log(students[i]+' '+students[i].total());   
}
