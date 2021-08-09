const Course = require('../models/Course');

class SiteControllers {

    // method get / home
    index(req, res) {
      Course.find({}, function(err, courses) {
        if(!err) {
            res.json(courses);
        } else {
            res.status(400).json({err: 'ERROR'})
        }
      })
        res.render('home');
    }
    // method get / search

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteControllers;