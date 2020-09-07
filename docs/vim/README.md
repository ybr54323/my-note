## 关于在vim中的查找和替换
[https://www.cnblogs.com/huxinga/p/7942194.html](https://www.cnblogs.com/huxinga/p/7942194.html)
## 跳到文件头
```shell script
:1
```
## 跳到文件尾
```shell script
:$
```
## 关于在vim中的查找和替换
1. 查找
    在normal模式下按下`/`即可进入查找模式，输入要查找的字符串并按下回车。 Vim会跳转到第一个匹配。按下`n`查找下一个，按下`N`查找上一个。
    Vim查找支持正则表达式，例如`/vim$`匹配行尾的`vim`。 需要查找特殊字符需要转义，例如`/vim\$`匹配`vim$`。
2. 大小写敏感查找
    在查找模式中加入`\c`表示大小写不敏感查找，`\C`表示大小写敏感查找。例如：
    `/foo\c`
    将会查找所有的`"foo","FOO","Foo"`等字符串。
