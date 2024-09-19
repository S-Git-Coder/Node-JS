module.exports = reqFilter = (req, resp, next) => {
    // console.log('reqFilter');
    if (!req.query.age)
    {
        resp.send("Please provide Your age");
    }
    else if(req.query.age<18){
        resp.send("you can not access this page");
    }
    else {
        next();
    }
    
}