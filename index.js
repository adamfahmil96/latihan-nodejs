const express       = require("express");       // mengambil blue-print (module) express
const cors          = require("cors");
const bodyParser    = require("body-parser");
const mongoose       = require("mongoose");
require("dotenv/config");

const app = express();  // membuat object

// mongoose adalah jembatan antara node-js dengan mongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true},
    ()=>console.log("Connected to DB!")
);

// bikin variabel dari muatan hasil koneksi mongoose di atas
const db    = mongoose.connection;

// Import routes
const user  = require("./sources/routes/user_route");

// pembacaan variabel "db"
db.on("error", console.error.bind(console, "Koneksi Error"));
db.once("open", ()=>{
    console.log("MongoDB terkoneksi");
});

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// Middleware
app.use("/user", user);

// MIDDLEWARE
// = like a function that executes when routes are being hit
app.use("/posts", ()=>{
    console.log("This is a middleware running");
});

// ROUTES
// get: get the information
app.get("/", (req, res)=>{
    res.send("We are at home");
});

app.get("/posts", (req, res)=>{
    res.send("We are at posts");
});

// memulai (how do we start listening to the server)
app.listen(3000, ()=>{
    console.log("Server berjalan pada port 3000 yaa");
});