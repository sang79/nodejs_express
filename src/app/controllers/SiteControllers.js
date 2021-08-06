class SiteControllers {

    // method get / home
    index(req, res) {
        res.render('home');
    }
    // method get / search

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteControllers;