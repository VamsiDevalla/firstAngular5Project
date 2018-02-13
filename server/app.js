var bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    express          = require("express"),
    cors             = require('cors'),
    jwt              = require('jsonwebtoken');
    app              = express()

mongoose.connect("mongodb://localhost/sandBox")

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

app.options('/posts/:id', cors())
app.use(bodyParser.json())

var userSchema = new mongoose.Schema({
    Username: String,
    Password: String,
})

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
})

var Post = mongoose.model("Post", postSchema),
    User = mongoose.model("User", userSchema)

    app.post('/signup', function (req, res) {
        User.create(req.body, function (err, data) {
            if (!err) {
                res.send(data)
            } else {
                console.log(err)
            }
        })
    })
    
    app.post('/login', function (req, res) {
        User.findOne({
            Username: req.body.Username,
            Password: req.body.Password
        }, function (err, data) {
            if (!err && data!=null) {
                var token = jwt.sign({'uname':data.username}, 'devalla-secret-key', {
                    expiresIn: '1h'
                  });
                  res.send({"loggedIn":true, 'token':token});
            } else {
                console.log(err);
            }
        })
    })

    app.use(function(req, res, next) {
        var token = req.headers.authorization;
        if(token) {
          jwt.verify(token, 'devalla-secret-key', function (err, decoded) {
            if (err) {
              console.log('Error');
            } else {
                req.decoded = decoded;
                console.log(req.decoded);
                next();
            }
          });
        } else {
          console.log("hi")
        }
      });
    

    

app.post('/posts', function (req, res) {
    Post.create(req.body, function (err, data) {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/posts',function(req,res){
    console.log("hi")
    Post.find({}, function (err, data) {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/posts/:id',function (req, res) {
    Post.findById(req.params.id, function (err, data) {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    })
})

app.put("/posts/:id",function(req,res){
    Post.findByIdAndUpdate(req.params.id, req.body,function(err,data){
       if(!err){
          res.send(data) 
       } 
       else{
          console.log(err)
       }
    })
})

app.delete("/posts/:id",function(req,res){
    Post.findByIdAndRemove(req.params.id,function(err){
       if(!err){
          res.send({"flag":"success"})
       } 
       else{
           console.log(err)
       }
    })
 })
 


app.listen(2000, function () {
  console.log("sandbox application is running on port 2000");
});
