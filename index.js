const express       = require("express");       // mengambil blue-print express
const cors          = require("cors");
const bodyParser    = require("body-parser");
const mongoose       = require("mongoose");

const app = express();  // membuat object

// mongoose adalah jembatan antara node-js dengan mongoDB
mongoose.connect("mongodb://168.168.168.75/simrs", { useNewUrlParser: true, useUnifiedTopology: true});

// bikin variabel dari muatan hasil koneksi mongoose di atas
const db    = mongoose.connection;

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

app.use("/user", user);

// memulai
app.listen(3000, ()=>{
    console.log("Server berjalan pada port 3000 yaa");
});