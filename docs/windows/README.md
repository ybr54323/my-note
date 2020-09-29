## windows ftp 指令
```shell script
C:\Users\qfyu>ftp
ftp> open 192.168.1.151              //打开服务器IP
连接到 192.168.1.151。
220 (vsFTPd 3.0.3)
200 Always in UTF8 mode.
用户(192.168.1.151:(none)): a        //输入用户名
331 Please specify the password.
密码:                                 //输入密码
230 Login successful.
ftp>
```
[Linux开启ftp服务及基本使用方法](https://www.jianshu.com/p/2f4d6f71b4c8)

## windows 利用scp传输文件
- 从服务器下载文件
    ```shell script
    scp username@servername:/path/filename /tmp/local_destination
    ```
    例如
    把`192.168.0.101`上的`/home/kimi/test.txt`的文件下载到 `/tmp/local_destination`
    ```shell script
    scp codinglog@192.168.0.101:/home/kimi/test.txt 
    ```
  
- 上传本地文件到服务器
    ```shell script
    scp /path/local_filename username@servername:/path  
    ```
    例如  
    把本机`/var/www/`目录下的`test.php`文件上传到`192.168.0.101`这台服务器上的`/var/www/`目录中
    ```shell script
    scp /var/www/test.php  codinglog@192.168.0.101:/var/www/ 
    ```
  
- 从服务器下载整个目录
    ```shell script
    scp -r username@servername:remote_dir/ /tmp/local_dir 
    ```
    例如
    ```shell script
    scp -r codinglog@192.168.0.101 /home/kimi/test  /tmp/local_dir
    ```

- 上传目录到服务器
    ```shell script
    scp  -r /tmp/local_dir username@servername:remote_dir
    ```
    例如 
    把当前目录下的`test`目录上传到服务器 的`/var/www/`目录：
    
    ```shell script
    scp -r C:\Program Files(x86)\users\test.txt codinglog@192.168.0.101:/var/www/
    ```
 
## Windows中是否有代替Linux中cat的命令
这个指令其实就是type

 


  
       

 



　　

