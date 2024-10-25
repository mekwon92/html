// 객체 리터럴 : 객체를 직접 정의
// 간단하게 속성과 메소드를 한 번에 정의

//typescript MS 
//react 메타


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
,toString : function(){
    return `이름 : ${this.name} 총점 : ${this.total()} 평균 : ${this.avg()}`;
}};

console.log(student1);
console.log(student1.total()); //270

console.log(student1.toString()); // 이름 : 머스크 총점 : 270 평균 : 90

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
//이름 : 머스크 총점 : 270 평균 : 90,이름 : 주커버그 총점 : 210 평균 : 70,이름:빌게이츠 총점 : 250 평균 : 83.33333333333333