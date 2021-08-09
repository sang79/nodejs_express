
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {


    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   }) viết mới lại sau khi cấu hình route theo chuẩn mvc
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/search', siteRouter);
    app.use('/courses', coursesRouter);
    // app.get('/search', (req, res) => {
    //     // console.log(req.query); ở đây trên phần url mà users nhập vào thì nó trả về 1 obj, với những thông rin mà ta nhập được đưa vào query trong request
    //     res.render('search');
    // })
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.render('search');
    })
}

module.exports = route;