const Course = require('../models/Course'); 
const { mongooseToObject } = require('../../ulti/mongoose');
class CoursesControllers {

    // method get / news
    show(req, res, next) {
       Course.findOne({slug: req.params.slug})
        .then(course => {
            res.render('courses/show', {course: mongooseToObject(course) });
        })
        .catch(next);
    }
}
module.exports = new CoursesControllers;