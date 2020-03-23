const mongoose  = require("mongoose"); // memanggil blue-print mongoose
const Schema    = mongoose.Schema;  // kita menggunakan method Schema untuk membuat document (table)

const dataUser = {
    nama        : String,
    nip         : String,
    kepegawaian : String,
    pendidikan  : String,
    pk          : String,
    jabatan     : String,
    ruangan     : String,
    username    : String,
    password    : String,
    activated   : Boolean
}
const userSchema = new Schema(dataUser);

module.exports = mongoose.model("User", userSchema);    // pembuatan model dengan nama "User", lalu diekspor (kenapa diekspor? supaya bisa dikonsumsi oleh file lain)