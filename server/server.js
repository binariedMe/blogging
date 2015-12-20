/**
 * Created by rohitk on 09-Nov-15.
 */
var express = require('express'),
    session = require('client-sessions'),
    bodyP   = require('body-parser'),
    fs      = require('fs'),
    Server  = require('http').Server,
    socket  = require('socket.io'),
    app     = express();


var server  = Server(app);
var sio     = socket(server);



var credentials = null;
var readCredentials = function(){
    credentials = JSON.parse(fs.readFileSync("../credentials.json"))
};
readCredentials();

var writeCredentials = function(){
    fs.writeFileSync("../credentials.json", JSON.stringify(credentials));
    readCredentials();
};

app.use(bodyP.json());
app.use(bodyP.urlencoded({
    extended: true
}));

var sessionObject = session({
    cookieName: 'session',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
});
sio.use(function(socket, next){
    sessionObject(socket.request, socket.request.res, next);
});
app.use(sessionObject);


app.use(function(req, res, next) {
    if (req.session && req.session.user) {

        if(req.session.user.useraccess == 'admin')
            req.useraccess = 'admin';
        else req.useraccess = 'user';
        req.user = req.session.user;
        next();
        /*User.findOne({ email: req.session.user.email }, function(err, user) {
         if (user) {
         req.user = user;
         delete req.user.password; // delete the password from the session
         req.session.user = user;  //refresh the session value
         res.locals.user = user;
         }
         // finishing processing the middleware and run the route
         next();
         });*/
    } else {
        next();
    }
});

app.post('/register', function(req, res){

    var username = req.body.username;
    var password = req.body.password;
    if(credentials[username] == undefined){
        credentials[username] = {name : username, password : password, useraccess : 'user'};

        writeCredentials();
        res.send({status : true, message : "Registration Successful"});
    }
    else res.send({status : false, message : "Registration unsuccessful"});

});

app.post('/checkduplicate', function(req, res){
    var flag = credentials[req.body.username] != undefined;
    res.send({status : flag});
});

app.post('/login', function(req, res) {

    var username = req.body.username;
    var password = req.body.password;
    if(credentials[username] == undefined) {
        res.send({status : false, message : "Username doesn't exist"});
    }
    else if(credentials[username].password == password)
    {
        req.session.user = {username : username,password : password, useraccess : credentials[username].useraccess};
        res.send({status : true, message : "Login Successfull! Redirecting you in a while..."});
        //res.redirect('/test');
    }
    else res.send({status : false, message : "Username and password don't match"});
    // res.redirect('/auth');


    /*User.findOne({ email: req.body.email }, function(err, user) {
     if (!user) {
     res.render('login.jade', { error: 'Invalid email or password.' });
     } else {
     if (req.body.password === user.password) {
     // sets a cookie with the user's info
     req.session.user = user;
     res.redirect('/dashboard');
     } else {
     res.render('login.jade', { error: 'Invalid email or password.' });
     }
     }
     });*/
});

function checkAdmin(req, res, next){
    if(req.useraccess == 'admin')
        next();
    else res.send("");
}

function requireLogin (req, res, next) {
    if (!req.user) {
        res.redirect('/auth');
    } else {
        next();
    }
};
function alreadyLoggedIn (req, res, next) {
    if (!req.user) {
        next();
    } else {
        res.redirect('/');
    }
};


app.get('/views/edit-setting-panel.html', checkAdmin, function(req, res){
    res.sendFile('edit-setting-panel.html', {"root" : "../views"});
});


app.get('/auth', alreadyLoggedIn, function(req, res){
    res.sendFile("authentication.html", {"root" : "../"})
});
app.get('/logout', function(req, res) {
    req.session.reset();
    res.redirect('/');
});


app.get('/test', function(req, res){
    res.sendFile("index.html", {"root" : "../"})
});

app.get('/', function(req, res){
    res.sendFile("index.html", {"root" : "../"})
});

app.get('/getusername', function(req, res){
    if(req.user){
        res.send({ username : req.user.username, loginFlag : true});
    }
    else res.send({username : "Guest User", loginFlag : false});
});

app.get('/getTitles', function(req, res){
    var list = fs.readdirSync('../views/blogs');
    for(var i = 0; i < list.length; i++)
        list[i] = list[i].replace(/-/gi, " ").replace(/.html/gi, "");
    res.send({"list" : list});
});

app.get('/blog', function(req, res){
    var blogTitle = req.query.title;
    var title = blogTitle.trim().replace(/ /ig, "-");
    var fileName = getFileName("../views/blogs/", blogTitle, ".html");
    //var content = fs.readFileSync("../views/blogs/" + title + ".html", 'utf8');
    var content = fs.readFileSync(fileName, 'utf8');
    res.send({"title" : blogTitle, "content" : content});
});

app.post('/blog', requireLogin, checkAdmin, function(req, res){
    var title = req.body.title,
        oldTitle = req.body.oldTitle,
        content = req.body.content;

    if(oldTitle != null){
        var fileName = getFileName("../views/blogs/", oldTitle, ".html");
        fs.unlinkSync(fileName);
    }
    fileName = getFileName("../views/blogs/", title, ".html");
    fs.writeFileSync(fileName, content);
    // fs.writeFileSync("../views/blogs/" + title.trim().replace(/ /ig, "-") + ".html", content);
    res.send(title);
});

function getFileName(path, title, ext){
    var fileTitle = title.replace(/ /gi, "-");
    var fileName = path+ fileTitle + ext;
    return fileName;
}

app.post('/getcomments', function(req, res){
    var title = req.body.title;
    var commentData = [];
    var fileName = getFileName("../views/comments/", title, ".json");
    if(fs.existsSync(fileName))
    commentData = fs.readFileSync(fileName) + "]}";
    res.send(commentData);
    //res.send([{title : title, comment : title, time : new Date(), commentator : "rohit" }]);
});








sio.sockets.on('connection', function(socket){
    socket.on('postComment', function(data){

        var user = socket.request.session.user;
        try {

            if (credentials[user.username] && credentials[user.username].password == user.password) {
                var commentData = {
                    title: data.title,
                    comment: data.comment,
                    time: (new Date()).getTime(),
                    commentator: user.username
                };
                var fileTitle = (data.title).replace(/ /gi, "-");
                var fileName = getFileName("../views/comments/", data.title, ".json");

                if(!fs.existsSync(fileName))
                    fs.writeFileSync(fileName, '{"comments" : [' + JSON.stringify(commentData));
                else
                    fs.appendFileSync(fileName, ","+ JSON.stringify(commentData));
                if (!fs.existsSync("../views/comments/" + fileTitle + ".json"))
                 fs.writeFileSync("../views/comments/" + fileTitle + ".json", '{"comments" : [' + JSON.stringify(commentData));
                 else fs.appendFileSync("../views/comments/" + fileTitle + ".json", "," + JSON.stringify(commentData));
                sio.emit('comment', commentData);
            }
            else console.log("Unauthenticated Comment");

        }
        catch(error){
            //do something with the error...
        }
    });

});















app.use(express.static("../"));
server.listen(4000, function(){
    console.log("Your server is up and listening at 4000");
});
/*

 app.listen(4000, function(){
 console.log("Your server is up at 4000")
 });*/
