const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;
// 1  lỗi cơ bản khi sử dụng nodeman, nếu chỉ sử đụng nó cho dev, với synt npm i nodemon --save-dev thay vì global như npm i -g nodemon@2.0.7 thì nó ko hoạt động, cái này có thể gặp ở những trường hợp khi ta sử dụng những gói khá trên dev thay vì cài vào code !


  // HTTH LOGGER
app.use(morgan('combined'));
// sư dụng thằng morgan ở đây để nó thông báo bên dưới termianl cho ta những thông số thường thấy trong f12, tương tự như phần responsive trả về 200 hay 304, nói gọn là nó cho phép ta suy đoán, và biết dc khi nào nó lỗi hay không, vì ko phải lúc nào nó cũng show ra, có thể trên trình duyệt nó xoay mãi k show ra j!

// TEMPLATE ENGINES
// app.engine('handlebars', handlebars({
//   extname: '.handblebars'
// }));

// ban đầu hbs là cú pháp như bên trên handlebars theo mặc định của template, nhưng vì nếu giữ như cũ phần hanlebars. thì cứ mỗi lần tạo file ta phải đặt đuôi là handlebars, rất dài dòng, nên phần synt bên dưới là dựa theo phần custom ở npm để thay lại đuôi cụ thể là phần extname!
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));  
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})