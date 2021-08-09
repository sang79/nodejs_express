const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../ulti/mongoose');
class SiteControllers {

    // method get / home
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err)
        //         // res.status(400).json({err: 'ERROR'})
        //     }
        // })
        // method get / search  đoạn trên là cách viết mongoose theo callback, và nó hơi dài dòng, ta chuyển sang viết theo promise vì nó ngắn gọn hơn, mogoose có thể sử dụng cả callback và promise
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject());
                // khi sử dụng handlebars thường gặp phải vấn đề này và buộc phải viết lại đoạn code trên, nên ta tiến hành làm gọn lại 
                res.render('home', { 
                    courses: multipleMongooseToObject(courses) 
                });
            })
            
            .catch(err => next(err));
        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteControllers;