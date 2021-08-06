class NewControllers {

    // method get / news
    index(req, res) {
        res.render('news');
    }
}
module.exports = new NewControllers;