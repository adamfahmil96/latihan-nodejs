const EventEmitter = require("events"); // mengambil blueprint events, bentuknya class (kapital)

var url = "http://mylogger.io/log"; // contoh http

// dibuat class agar bisa diakses module lain
class Logger extends EventEmitter {
  log(message) {
    // send an HTTP request
    console.log(message);

    // raise an event
    this.emit("messageLogged", { id: 1, url: "http://" }); // 'this' dari class EventEmitter, yang memiliki method 'emit'
  }
}

module.exports = Logger; // lakukan export agar class yang tadi dibuat bisa diakses oleh module lain
