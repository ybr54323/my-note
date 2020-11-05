# script标签
script的加载、解析、执行跟html文档的解析是串行的，所以通常将script放在html文档body标签后面，让浏览器先去解析html，并将内容渲染出来，再去加载script标签、再解析、执行。
可以在script中，加上defer（延迟）boolean属性，该属性能将script文件延迟到页面解析完毕后再`运行`。但只对外部script标签生效。

可以给script中，加上async异步属性，
在默认情况下，网页和js文件时同步加载的，如果js文件比较大，就会影响网页的加载，这时可以在script中加上async属性，即在加载js时，浏览器不暂停，个人理解可能是多线程环境，再新建一个线程
来加载处理js文件。

# touch事件
- touchstart
- touchmove
- touchend
- touchcancel
给`touch`事件添加事件句柄，要顺手`preventDefault`，因为不然的话接下来会触发mouse的一系列事件，包括`mousedown,mousemove,mouseup`等待
还有，在`touch`的事件句柄里面，`event`获取不到`offsetX,offsetY`，但是能拿到`clientX,clientY,pageX,pageY`，如果需要这两个值，
需要结合dom的`offsetTop,offsetLeft`等属性去计算，其中`clientX,clientY`是以屏幕左上角为坐标轴原点，`touch`事件发生的横纵坐标，
x，y轴坐标，而`pageX,pageY`是以页面的左上角为坐标原点，如果页面高度超出一屏，那这个原点相当于在屏幕外了。
可以结合上面两个属性去计算`offsetX,offsetY`

# 为什么用`void 0`代替`undefined`?
`undefined`是一个变量，而不是一个关键字，所以它有可能被改动，(es6以前,es6以后只在局部环境可以被赋值)所以规范会推荐用`void 0`来获取
`undefined`的值

# 装箱转换
每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类，所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。

JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，为什么JavaScript 不能有多个线程呢 ？这样能提高效率啊。
JavaScript 的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，
否则会带来很复杂的同步问题。比如，假定JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，
这时浏览器应该以哪个线程为准？ 所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。 
作者：是夜尽天明呀 链接：https://www.jianshu.com/p/f478f15c1671 来源：简书 著作权归作者所有。商业转载请联系作者获得授权，
非商业转载请注明出处。

# Promise
`Promise`是`JavaScript`语言提供的一种标准化的异步管理方式，它的总体思想是，需要进行 io、等待或者其它异步操作的函数，不返回真实结果，
而返回一个“承诺”，函数的调用方可以在合适的时机，选择等待这个承诺兑现（通过 `Promise` 的 `then` 方法的回调）。

# Promise & setTimeout
Promise产生的是JavaScript引擎内部的微任务，而setTimeout是浏览器API，它产生宏任务
为了理解微任务始终先于宏任务，我们设计一个实验：执行一个耗时 1 秒的 Promise。
```javascript
setTimeout(()=>console.log('macro task'))
var r = new Promise(function (resolve, reject) { 
  resolve()
})
r.then(() => {
  var begin = Date.now()
  while(Date.now() - begin < 1000)
  console.log('micro task1')
  new Promise(function (resolve, reject) { 
    resolve  
 }).then(() => {
    console.log('micro task2') 
  })
})
```
结果是，即使执行了一个耗时需要1秒的`Promise`，`setTimeout`的执行仍然在Promise之后
通过一系列的实验，我们可以总结一下如何分析异步执行的顺序：首先我们分析有多少个宏任务；在每个宏任务中，分析有多少个微任务；根据调用次序，
确定宏任务中的微任务执行次序；根据宏任务的触发规则和调用次序，确定宏任务的执行次序；确定整个顺序。
# `Completion Record`
```javascript
function foo(){
    try {
      return 0;
    }
    catch(err) {
     
    } finally {
      return 1;
    }}
console.log(foo());
// log 1
```
通过实际执行，我们看到，`finally` 中的 `return` “覆盖”了 `try` 中的 `return`。在一个函数中执行了两次 return，这已经超出了很多人的常识，
也是其它语言中不会出现的一种行为。面对如此怪异的行为，我们当然可以把它作为一个孤立的知识去记忆，但是实际上，这背后有一套机制在运作。

JavaScript语句执行的完成状态，使用一个标准类型 `Completion Record`来表示
他有三个字段
- [[type]] 表示完成的类型，有break, continue, return, throw, 和normal几种类型
- [[value]] 表示语句的返回值，如果语句没有，则是 empty；
- [[target]] 表示语句的目标，通常是一个 JavaScript 标签（标签在后文会有介绍）。

如果你经常使用 `Chrome` 自带的调试工具，可以知道，输入一个表达式，在控制台可以得到结果，但是在前面加上 `var`，
就变成了 `undefined`。`Chrome` 控制台显示的正是语句的 `Completion Record` 的[[value]]。

实际上，任何 JavaScript 语句是可以加标签的，在语句前加冒号即可：
```javascript
firstStatement: var i = 1;
```
大部分时候，这个东西类似于注释，没有任何用处。唯一有作用的时候是：与完成记录类型中的 `target` 相配合，用于跳出多层循环。
```javascript
outer: while(true) {
    inner: while(true) {
      break outer;
    }
}
console.log("finished")
```
`break/continue` 语句如果后跟了关键字，会产生带 `target` 的完成记录。一旦完成记录带了 `target`，那么只有拥有对应 `label` 的循环语句会消费它。

# 零宽空格
\u200b （(Zero width space) characters）

# 不写分号需要注意的情况
- 以括号开头的语句
```javascript
(function(a){
    console.log(a);
})()/*这里没有被自动插入分号*/
(function(a){
    console.log(a);
})()
```
这段代码看似两个独立执行的函数表达式，但是其实第三组括号被理解为传参，导致抛出错误。

## 以数组开头的语句
除了括号，以数组开头的语句也十分危险：
```javascript
var a = [[]]/*这里没有被自动插入分号*/
[3, 2, 1, 0].forEach(e => console.log(e))
```

## 以正则表达式开头的语句
```javascript
var x = 1, g = {test:()=>0}, b = 1/*这里没有被自动插入分号*/
/(a)/g.test("abc")
console.log(RegExp.$1)
```
这段代码本意是声明三个变量，然后测试一个字符串中是否含有字母 a，但是因为没有自动插入分号，正则的第一个斜杠被理解成了除号，后面的意思就都变了。注意，我构造的这个例子跟上面的例子一样，同样不会抛错，凡是这一类情况，都非常致命。

## 以 Template 开头的语句
以 Template 开头的语句比较少见，但是跟正则配合时，仍然不是不可能出现：
```javascript
var f = function(){
  return "";
}
var g = f/*这里没有被自动插入分号*/
`Template`.match(/(a)/);
console.log(RegExp.$1)
```
这段代码本意是声明函数 f，然后赋值给 g，再测试 Template 中是否含有字母 a。但是因为没有自动插入分号，函数 f 被认为跟 Template 一体的，进而被莫名其妙地执行了一次。