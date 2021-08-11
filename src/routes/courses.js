const express = require('express');
const router = express.Router();

const coursesControllers = require('../app/controllers/CoursesControllers');
router.get('/create', coursesControllers.create);
// b1 để tạo mới url create này, ta thêm vào ở route trước tiên, sau đó mới đến bước 2 taoj nó ở controller để kiểm tra xrm nó có hoạt động ổn hay ko
router.post('/store', coursesControllers.store);
router.get('/:id/edit', coursesControllers.edit);
router.put('/:id', coursesControllers.update);
router.get('/:slug', coursesControllers.show);

module.exports = router;
