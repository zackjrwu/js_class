//  es5
//  利用 function 來定義類別(初始化建構子)
var Person5 = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
//  對此類別增加一個方法
Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
};
//  初始化此類別的物件
var john5 = new Person5('John', 1990, 'teacher');
//  使用此類別的方法
john5.calculateAge();

//  es6
//  利用關鍵字 class 來定義類別
class Person6 {
    //  初始化建構子
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    //  對此類別增加一個方法
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    //  對此類別增加一個靜態方法(只有此類別內才可以使用)
    static greeting() {
        console.log('Hi there');
    }
}

const Zack6 = new Person6('Zack', 1990, 'teacher');
//  Zack6.calculateAge();  gg
Person6.greeting();