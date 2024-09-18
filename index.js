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