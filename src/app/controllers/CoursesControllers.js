const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');
class CoursesControllers {

    // method get / news
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    create(req, res, next) {
        res.render('courses/create');
        //  b2 bên phần route course ta sang đây tạo ra create và check bằng lệnh trên, kiểm tra xrm nó có work bên thằng kia kkhoong, sau khi xác định ok, ta mới sang phần view và tạo ra 1 thằng mới!
    }

    // post courses/create 
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {

            });
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => {
            res.render('courses/edit', { course: mongooseToObject(course) });
        })
        .catch(next);
    }
    // put method update couses:id
    update(req, res, next) {
       res.json(req.body);
    }
}
module.exports = new CoursesControllers;