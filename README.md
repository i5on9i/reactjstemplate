# ReactJs template



## Prerequisite
Nodejs has been installed

## Install on Windows
Install modules specified on pacakage.json

     c:\...> npm install
Git path need to be set for bower execution

     c:\...> set PATH=%path%;c:\Program Files (x86)\Git\bin;
Install all the .js files on bower.json

     c:\...> node_modules\.bin\bower.cmd install


## How to use static server
Static server is needed to use the React development tool on Chrome. On local file test, without server, React development tool is not run.

     c:\...> static-server.bat

After run the static server, you can test with the URL, for example :
> http://127.0.0.1:7575/src/html/test.html


