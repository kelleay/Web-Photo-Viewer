// 导入mysql模块
const mysql = require('mysql2')

// 连接数据库
const connection = mysql.createConnection({
    host:'localhost',
    user:'Your-Username',
    password:'Your-Password',
    database:'images'
})

function startConnection(){
    connection.connect(function(err){
        if(err){
            console.log("connect is not good" + err.stack)
            return ;
        }
        console.log("connect is ok !")
    })
}

module.exports = {
    connection,
    startConnection,
}
