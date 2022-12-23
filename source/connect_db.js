var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"team_12"
});

con.connect();

function get_info(){
    con.query('SELECT * from Producer', (error, results)=>{
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });
}

function update_info(){
    var user_name
    var number
    var sql = 'INSERT INTO Producer (user_name, password) VALUES (?, ?)';
    values = [user_name, number]
    con.query(sql, values, (error, results)=>{
        console.log("1 record inserted");
    });
}
