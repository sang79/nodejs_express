const { multipleMongooseToObject } = require('../../ulti/mongoose');
const Course = require('../models/Course');

class MeControllers {

    // method get / news
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}
module.exports = new MeControllers;