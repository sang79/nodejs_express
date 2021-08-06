const express = require('express');
const router = express.Router();

const siteControllers = require('../app/controllers/SiteControllers');
// phần khai báo biến thì chỉ cần viết thường chữ cái đầu, khác với phần khau báo class hay constructor thì mới phải khao báo viết hoa đầu mỗi chữ cái!!

// router.use('/slug', siteControllers.index); giả sử ta có nhiều routes thì phải tuân thủ như trên, là route dẫn tới thằng cha / phải nằm đưới và các thằng con thì nằm trên, để trong trường hợp mà những th con ko đúng thì nó tự động truy cập vào th cha cuối cùng!
router.use('/search', siteControllers.search);
router.use('/', siteControllers.index);

module.exports = router;
