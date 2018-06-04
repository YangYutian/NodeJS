exports.name = "孙悟空";
exports.age = 18;
exports.sayName = function () {
    console.log("我是孙悟空~~~");
};
module.exports = {
    name : "猪八戒",
    age : 20,
    sayName : function(){
        console.log("我是猪八戒~~~")
    }
};
var obj = {};
obj.a = {};
var a = obj.a; //a和obj.a指向同一个对象
console.log(a == obj.a);
a.name = "孙悟空";
console.log(obj.a.name);
console.log(a.name);
a = new Object();
console.log(obj.a.name);
console.log(a.name);
