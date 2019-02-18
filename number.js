function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'tom';
console.log(sayHello(user));
var isDone = false;
var createdByNewBoolean = new Boolean(1);
// new Boolean() 返回的是一个 Boolean 对象：
// Type 'Boolean' is not assignable to type 'boolean'. 
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
var createdByBoolean = Boolean(1);
//直接调用 Boolean 也可以返回一个 boolean 类型：
//使用number定义数值类型
var decLiteral = 6;
var hexLiteral = 0xf00d; //十六进制
var binaryLiteral = 10; //二进制
var octalLiteral = 484; //八进制
var notANumber = NaN;
var infinityNumber = Infinity;
