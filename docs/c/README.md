`long ftell(FILE * stream)`
获取文件读写指针的当前位置
`int fseek(FILE * stream, long offset, int whence)`

*fseek()用来移动文件流的读写位置.*

1. 参数stream 为已打开的文件指针,
2. 参数offset 为根据参数whence 来移动读写位置的位移数。参数 whence 为下列其中一种:
    SEEK_SET 从距文件开头offset 位移量为新的读写位置. SEEK_CUR 以目前的读写位置往后增加offset 个位移量.
    SEEK_END 将读写位置指向文件尾后再增加offset 个位移量. 当whence 值为SEEK_CUR 或
    SEEK_END 时, 参数offset 允许负值的出现.

下列是较特别的使用方式：
1) 欲将读写位置移动到文件开头时:fseek(FILE *stream, 0, SEEK_SET);
2) 欲将读写位置移动到文件尾时:fseek(FILE *stream, 0, 0SEEK_END);

返回值：当调用成功时则返回0, 若有错误则返回-1, errno 会存放错误代码.
