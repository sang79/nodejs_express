const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewControllers');
// phần khai báo biến thì chỉ cần viết thường chữ cái đầu, khác với phần khau báo class hay constructor thì mới phải khao báo viết hoa đầu mỗi chữ cái!!

router.get('/', newControllers.index);

module.exports = router;
