const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'devpass',
    database : 'atletic_app'
});

module.exports = connection;
/*************************************************
const mysql = require("mysql2/promise");

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;    
    const connection = await mysql.createConnection("mysql://root:devpass@localhost:3306/atletic_app");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = connect();
***************************************************/
