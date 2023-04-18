const mysql = require('mysql');

// This is the how to connect the dbms
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "---",
    database: "JosefVodicka"
});
connection.connect(function (err) {
    if (err) throw Error('unsuccessful connection for some reason'+err)
});

module.exports = connection

/* This is how to query, it will return a list of rows so you can access using
index, each row is a json object. */
// connection.query("SELECT * FROM universities", (err, res) => {
//   if (err) throw new AppError(err, 502);
//   console.log(res);
// });
