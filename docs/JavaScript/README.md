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


