const mongoose  = require("mongoose"); // memanggil blue-print mongoose
const Schema    = mongoose.Schema;  // kita menggunakan method Schema untuk membuat document (table)

const dataUser = {
    nama            : String,
    alamat          : String,
    lahir_tgl       : String,
    lahir_tempat    : String,
    gender          : String,
    pendidikan      : String,
    pekerjaan       : String,
    marital_status  : String,
    kewarganegaraan : String,
    suku            : String,
    golongan_darah  : String,
    nik             : String,
    no_bpjs         : String,
    roles           : String,
    activated       : Boolean
}
const userSchema = new Schema(dataUser);

module.exports = mongoose.model("User", userSchema);    // pembuatan model dengan nama "User", lalu diekspor (kenapa diekspor? supaya bisa dikonsumsi oleh file lain)