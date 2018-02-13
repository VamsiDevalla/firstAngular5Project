var 
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    express          = require("express"),
    cors             = require('cors'),
    app              = express()

mongoose.connect("mongodb://localhost/sandBox")

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

app.options('/posts/:id', cors())
app.use(bodyParser.json())

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
})

var Post = mongoose.model("Post", postSchema)

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
