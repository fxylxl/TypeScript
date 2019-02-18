function sayHello(person: string) {
    return 'Hello, ' + person;
}


let user = 'tom';
console.log(sayHello(user));


let isDone : boolean = false;

let createdByNewBoolean : boolean = new Boolean(1);
// new Boolean() 返回的是一个 Boolean 对象：
// Type 'Boolean' is not assignable to type 'boolean'. 
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

let createdByBoolean : boolean = Boolean(1);
//直接调用 Boolean 也可以返回一个 boolean 类型：

//使用number定义数值类型
let decLiteral : number = 6;
let hexLiteral : number = 0xf00d; //十六进制
let binaryLiteral : number = 0b1010 //二进制
let octalLiteral : number = 0o744 //八进制
let notANumber : number = NaN;
let infinityNumber : number = Infinity;
