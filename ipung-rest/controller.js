'use strict';

var response = require('./res');    // memanggil file res.js
var connection = require('./koneksi');  // memanggil file koneksi.js

exports.index = function(req, res) {
    response.ok("Aplikasi REST API saya berjalan!", res);
};