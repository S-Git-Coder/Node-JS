/*
=> core module : console, fs, Buffer, HTTP
=> global module : import karane ki jarur nahi padti.
=> Non global module : import karana padta hai.
-----------------------------------------------------
==> create file :
const fs = require('fs');
fs.writeFileSync("hello.txt","Sahil Patel");
// "fs" ki jagah koi or name bhi le sakte hai hum.
-------------------------------------------------------
==> Create file :
const fs = require('fs').writeFileSync;
fs("abc.txt","abc");
// "fs" ki jagah koi or name bhi le sakte hai hum.
-------------------------------------------------------
console.log("->>",__filename); //get file name with path
console.log("->>",__dirname); // directory name
console.log(__dirname);
-------------------------------------------------------
createserver function as a parameter leta hai.

=> create server
const http = require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>Hello Sahil</h1>");
    resp.end();
}).listen(4500);

Another method : 
const http = require('http');

function datacontrol(req,resp){
    resp.write("<h1>Hello Sahil Patel</h1>");
    resp.end();
}

http.createServer(datacontrol).listen(4500);
------------------------------------------------
=> function ko arrow function kese banaye.
function : 
function datacontrol(req,resp){
    resp.write("<h1>Hello Sahil Patel</h1>");
    resp.end();
}

arrow function :
const datacontrol = (req,resp) =>
{
    resp.write("<h1>Hello Sahil Patel</h1>");
    resp.end();
}
-------------------------------------------------------
=> package.json project code details rakhta hai.
=> npm : node package manager
--------------------------------------------------------
colors package use : (first import colors package)
const colors = require('colors');
console.log("Hello".blue);
--------------------------------------------------------
node js is a single threaded means ek time par ek hi command run karta hai.
----------------------------------------------------------------
chalk package : 
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.underline("Sahil"));
console.log(chalk.red.underline.bold("Sahil"));
--------------------------------------------------------------
package or module dono ek hi hai bs name alag hai.
---------------------------------------------------------------
nodemon package : code ko baar baar run nahi karna padta because of ye package automatically code ko run karta hai.
-------------------------------------------------------------------
node js is async language.
----------------------------------------------------------------


----------------- video 11 -----------------------
==> index.js file (basic server create) : 

const http = require('http');
const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'})
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);

==> data.js file:

const data = [
    {name:'Sahil patel', email:'sahil@gmail.com'},
    {name:'Kevin patel', email:'kevin@gmail.com'},
    {name:'patel', email:'patel@gmail.com',contact:'991100'}

]
    module.exports = data; 

----------------- Video 12 ----------------------------------------
=> 
console.log(process.argv); // do output dega first file kaha save hai wo or second jaha se hum use run kar rahe hai wo.
[ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\node-tut\\index.js' ]

=> 
in terminal when we write/run below command.
node index.js hello // hello print karega(ye tabhi hoga jab hum process ka use karenge).

=> 
console.log(process.argv[2]); // output below
Hello

=>
const fs = require('fs');
const input = process.argv;
fs.writeFileSync(input[2],input[3]); // 2nd argument file name and 3rd text of file
// run command below
PS E:\node-tut> node index.js apple.txt 'this is a fruit' // output me apple.txt file create hogi or text usme aa jayegi.

=>
const fs = require('fs');

const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
}
else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
}
else {
    console.log("invalid input");
}
// run command below
PS E:\node-tut> node index.js add data.txt 'this is a color and fruit'
// data.txt file add hogi or uski text

=>
for delete file just write following command and above command is same.
PS E:\node-tut> node index.js remove data.txt 

=> 
case 3 in above code invalid input.
PS E:\node-tut> node index.js abc xyz

---------------- Video 13 --------------------------------

=>
// ek saath files name ke folder me 5 files create kar sakte hai. folder name nahi denge to root par create hogi.
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
// console.warn(dirPath);
for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath + "/hello" + i + ".txt", 'a simple text file');
    // fs.writeFileSync(`hello${i}.txt`, 'a simple text file');
}

=>
fs.readdir(dirPath,(err,files)=>{
    // console.warn(files);
    files.forEach((item)=>{
        console.log("file name is",item);
    })
});
// above code files ka name print karta hai.

----------------- Video 14 --------------------------------
Title : CRUD with file system(create,Read.Update,Delete)

=>
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/apple.txt`;
// fs.writeFileSync(filepath,'this is a simple text file'); // file create

// fs.readFile(filepath,"utf-8",(err,item)=>{   // read file
//     console.log(item);
// })

// fs.appendFile(filepath,"and file name is apple.txt",(err)=>{ // update file
//     if(!err) console.log("file is updated.")
// });

// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{   // file rename
//     if(!err) console.log("file is updated.")
// })

// fs.unlinkSync(`${dirpath}/fruit.txt`); // file delete

-------------------- Video 15 ----------------------------
Title : Asynchronous Basics in Node js

=>
in synchronous operations tasks are performed one at a time.(php)

=>
in Asynchronous, second task do not wait to finish first task.(fast hai)(node,javascript)

=>
console.log("start exe...");

setTimeout(()=>{
    console.log("logic exe..."); // pahele first print karega uske baad third and 2 second pure hone ke baad ye print hoga.
},2000)

console.log("complete exe...");

-------------------- Video 16 ----------------------------
Title : handle Asynchronous data in node js

=>
let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30) // 30 kijagah kuch bhi pass kar sakte hai array, variables etc.
    }, 2000)
})
waitingData.then((data) => {
    b = data;
    console.log(a + data);
})
// output is 50

--------------- Video 17(Important) ------------------------------
Title : Call Stack
        Node API 
        CallBack Queue
        Example

=>
console.log("starting up");

setTimeout(() => {
    console.log("2 second log");
}, 2000)

setTimeout(() => {
    console.log("0 second log");
}, 0)

console.log("finishing up");

// Output below
starting up
finishing up
0 second log
2 second log

------------------ Video 18 -----------------------------
Title : What is Express js  (framework of node js)
        Install Express 
        Make Example with Express js

=>  npm i Express

=>
const express = require('express');
const app = express();
app.get('', (req, res) => {
    res.send('Hello, this is Home page');
});

app.get('/about', (req, res) => {
    res.send('Hello, this is About page');
});

app.get('/help', (req, res) => {
    res.send('Hello, this is Help page');
});

app.listen(5000);

// Above code is create 3 pages.

---------------- Video 19 ------------------------------
Title : Routing Params - Request and Response

=>
const express = require('express');
const app = express();
app.get('', (req, res) => {
    console.log("data sent by browser : ", req.query.name);
    res.send('Hello, this is Home page');
    // res.send("Welcome " + req.query.name);
});

app.get('/about', (req, res) => {
    res.send('Hello, this is About page');
});

app.get('/help', (req, res) => {
    res.send('Hello, this is Help page');
});

app.listen(5000);

// http://localhost:5000/?name=sahil (we work with this in above example.)

------------------ Video 20 ------------------------------
Title : Render HTML and JSON
        How HTML tags
        Show json data
        Link pages

=>
const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log("data sent by browser : ", req.query.name);
    res.send(`
        <h1>Hello, this is Home page</h1>
        <a href="/about">Go to about page</a>
        `);
    // res.send("Welcome " + req.query.name);
});

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}" />
        <button>Click Me</button>
        <a href="/">Go to Home page</a>
        `);
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: "sahil",
            email: "sahil@gmail.com"
        },
        {
            name: "Patel",
            email: "patel@gmail.com"
        }
    ]);
});

app.listen(5000);

----------------- Video 21 --------------------------------
Title : Make HTML pages
        Make folder for HTML file and access it
        Make HTML files 
        Load HTML files

=>
index.js :

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath))

app.listen(5000);

=>
about.html:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
    <style>
        h1{
            color: red;
        }
    </style>
</head>
<body>
    <h1>About Page</h1>
</body>
</html>

-------------------- Video 22 ---------------------------
Title : Remove Extesnion From URL.

=>
const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');


// app.use(express.static(publicPath))
app.get('', (_,resp) => {
    resp.sendFile(`${publicPath}/index.html`);
})

app.get('/about', (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('/help', (_,resp) => {
    resp.sendFile(`${publicPath}/help.html`);
})

app.get('*', (_,resp) => {
    resp.sendFile(`${publicPath}/NoPage.html`);
})

app.listen(5000);

=>
Other Files: index.html
             about.html
             help.html
             NoPage.html

------------------ Video 23 ------------------------------
Title : Template Engine

=>
const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');


app.set('view engine', 'ejs');

app.get('', (_,resp) => {
    resp.sendFile(`${publicPath}/index.html`);
})

app.get('/profile', (_, resp) => {
    const user = {
        name: "sahil",
        email: "sahil@gmail.com",
        city : "Siddhpur"
    }
    resp.render('profile',{user});
})

app.get('/about', (_,resp) => {
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('/help', (_,resp) => {
    resp.sendFile(`${publicPath}/help.html`);
})

app.get('*', (_,resp) => {
    resp.sendFile(`${publicPath}/NoPage.html`);
})

app.listen(5000);

=>
Profile.ejs file :

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Profile Page</title>
</head>
<body>
    <h1>Welcome <%= user.name %></h1>
    <h1>Email <%= user.email %></h1>
    <h1>City <%= user.city %></h1>
</body>
</html>

----------------- Video 24 -------------------------------
Title : Dynamic Page

=>

const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if (!req.query.age)
    {
        resp.send("Please provide age");
    }
    else if(req.query.age<18){
        resp.send("you can not access this page");
    }
    else {
        next();
    }
    
}

app.use(reqFilter);

app.get('/', (req, resp) => {
    resp.send('welcome to home page')
})

app.get('/users', (req, resp) => {
    resp.send('welcome to Users Page')
})

app.listen(5000)

------------------ Video 26 -------------------------
Title : Route Level Middleware



const express = require('express');
const reqFilter = require('./middleware');
const app = express();
const route = express.Router();


app.use(reqFilter);
route.use(reqFilter);

app.get('/', (req, resp) => {
    resp.send('welcome to home page')
})

app.get('/users', (req, resp) => {
    resp.send('welcome to Users Page')
})

route.get('/about', (req, resp) => {
    resp.send('welcome to About Page')
})

route.get('/contact', (req, resp) => {
    resp.send('welcome to Contact Page')
})

app.use('/', route);

app.listen(5000)


------------------Video 27 -------------------------
Title : Install MongoDB

*/

