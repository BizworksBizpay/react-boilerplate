const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
require('dotenv').config();

/** 
* @swagger
*     components:
*         schemas:
*             Book:
*                 type: object
*                 required:
*                     - title
*                     - author
*                     - finished
*                 properties:
*                     id:
*                         type: integer
*                         description: The auto-generated id of the book.
*                     title:
*                         type: string
*                         description: The title of your book.
*                     author:
*                         type: string
*                         description: Who wrote the book?
*                     finished:
*                         type: boolean
*                         description: Have you finished reading it?
*                     createdAt:
*                         type: string
*                         format: date
*                         description: The date of the record creation.
*                     example:
*                         title: The Pragmatic Programmer
*                         author: Andy Hunt / Dave Thomas
*                         finished: true
*/

/**
*  @swagger
*  tags:
*    name: Books
*    description: API to manage your books.
*/
/**
*  @swagger
*  paths:
*   /books:
*     get:
*       summary: Lists all the books
*       tags: [Books]
*       responses:
*         "200":
*           description: The list of books.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*     post:
*       summary: Creates a new book
*       tags: [Books]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Book'
*       responses:
*         "200":
*           description: The created book.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Book'
*/

/* GET users listing. */
router.get('/', function(req, res, next) {

    const connect = {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_LOGINNAME
    }

    const db_test = async () =>{
        const connection = await mysql.createConnection({host:connect.host, user: connect.user ,password: connect.password, database: connect.database});
        const [rows, fields] = await connection.execute('SELECT * FROM kef_idpw');

    }
    
  res.send('respond with a resource');
});

module.exports = router;
