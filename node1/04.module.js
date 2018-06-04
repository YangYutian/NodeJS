// var a = 10;
a = 10; // global
//全局变量: 和window类似
console.log(global.a);
/*
   arguments     ---全局没有
* arguments.callee   ---保存的是当前执行的函数对象
* exports, require, module, __filename, __dirname
* exports  ---该对象用来将变量或函数暴露到外部
* require  ---函数，用来引入外部的模块
* module   ---代表当前模块本身
* exports  ---module的属性
*          ---exports == module.exports
* --filename
* --dirname
* */
console.log(arguments.callee + "");
console.log(exports);
console.log(module.exports);
console.log(__filename);
console.log(__dirname);