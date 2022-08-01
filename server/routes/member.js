const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const MemberController = require("../controller/member.controller"); //controller
require('dotenv').config();

/* required 필수값 표시 */
/** 
* @swagger
*     components:
*         schemas:
*             Member:
*                 type: object
*                 required:
*                     - title
*                     - author
*                     - finished
*                 properties:
*                     Member_Code:
*                         type: string
*                         description: 회원사코드.
*                     DamDang_Code:
*                         type: string
*                         description: 담당코드
*                     Member_Gubun:
*                         type: string
*                         description: 회원구분
*                     Member_Level:
*                         type: string
*                         description: 수임상태 
*                     Member_Name:
*                         type: string
*                         description: 회원사명칭 
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
*    name: Member
*    description: API to manage your books.
*/
/**
*  @swagger
*  paths:
*   /member:
*     get:
*       summary: 회원사 정보 테이블에서 전체를 조회한다.
*       tags: [Member]
*       responses:
*         "200":
*           description: The list of books.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Member'
*     post:
*       summary: Creates a new book
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Member'
*       responses:
*         "200":
*           description: The created book.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Member'
*/

/* GET users listing. */
router.get('/member_info', MemberController.getMemberInfo);


module.exports = router;
