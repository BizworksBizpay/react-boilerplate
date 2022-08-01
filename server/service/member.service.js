const mysql = require('mysql2/promise');
require('dotenv').config();



const getMemberInfo = async function (query, page, limit) {
    
    const connect = {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    }
    try {
        const connection = await mysql.createConnection({host:connect.host, user: connect.user ,password: connect.password, database: connect.database});
        const [rows, fields] = await connection.execute(query);
        return rows;
    } catch (e) {
        throw Error('Error while getMember');
    }
}

module.exports = 
{
    getMemberInfo,
}