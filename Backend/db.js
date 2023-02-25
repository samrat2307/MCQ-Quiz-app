const { process_params } = require("express/lib/router");
const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"samrat123",
    database:"assignment4"

});

connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        connection = null;
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
