const mysql = require('mysql2/promise');
require('dotenv').config();
const MemberService = require("../service/member.service");


const getMemberInfo = async function (req, res, next) {
    
    //var page = req.params.page ? req.params.page : 1;
    //var limit = req.params.limit ? req.params.limit : 10;

    try {
        
        const query = "SELECT * FROM member_info";
        const member = await MemberService.getMemberInfo(query);
        return res.status(200).json({ status: 200, data: member, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = 
{
    getMemberInfo,
}