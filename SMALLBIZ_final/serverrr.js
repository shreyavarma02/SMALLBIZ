const express = require("express")
//returns a function reference and this function is called from express
const app = express();
//.app is an object returned by express
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//body-parser is a piece of express middleware that reads a form's input 
//and stores it as a javascript object accessible through req.body.


app.use(express.urlencoded({ extended: true }))
// used to add the middleware- path,middlewar
mongoose.connect("mongodb+srv://Shru_pai:shrushrethi@clustermain.wxhuq.mongodb.net/notesDB", {
    useNewUrlParser: true,// it is for url parsing 
    useUnifiedTopology: true,// it is to make all the objects under one schema
}).then(() => {
    console.log("successful connection")// if connection is succesful, execute this
}).catch((err) => console.log(err))// like a try catch blcok

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/home.html")
})

app.get("/Signup", function (req, res) {
    res.sendFile(__dirname + "/Signup.html")
})

app.get("/rev", function (req, res) {
    res.sendFile(__dirname + "/rev.html")
})

app.get("/au", function (req, res) {
    res.sendFile(__dirname + "/au.html")
})

app.get("/north", function (req, res) {
    res.sendFile(__dirname + "/north.html")
})

app.get("/south", function (req, res) {
    res.sendFile(__dirname + "/south.html")
})

app.get("/east", function (req, res) {
    res.sendFile(__dirname + "/east.html")
})

app.get("/west", function (req, res) {
    res.sendFile(__dirname + "/west.html")
})

app.get("/central", function (req, res) {
    res.sendFile(__dirname + "/central.html")
})

app.get("/presentation", function (req, res) {
    res.sendFile(__dirname + "/Presentation2.mp4")
})

const notesSchema = {
    name: String,
    emailid: String,
    phno: String,
    pass: String,
    cpass: String
}// to specify the datatype of each field

const Note = mongoose.model("Note", notesSchema)
//creating an object of the noteschema


app.post("/", function (req, res) {
    let newNote = new Note({
        name: req.body.name,
        emailid: req.body.emailid,
        phno: req.body.phno,
        pass: req.body.pass,
        cpass: req.body.cpass
    })
    newNote.save()
    res.redirect('/')
})// posting the contents to the database

app.listen(6000, function () {
    console.log("server is running on 6000");
})// creating server

