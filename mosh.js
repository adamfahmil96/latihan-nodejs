const EventEmiiter = require("events");

const Logger = require("./mosh_logger"); // panggil isi dari module lain, bentuknya class
const logger = new Logger(); // class tadi dibuat object

// register a listener
logger.on("messageLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");
