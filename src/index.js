const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.json());
const bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// 3 dòng này để parse phần req.body, trong phần create new courses, sau khi đưa dc dữ liệu admin text vào các field ở course/create thì ta có vấn đề là req.body underfined, lỗi này do thiếu 3 thằng này gây ra, cụ thể là nó không gửi dc data trong formData lên server được, nên tạo ra course rỗng, nếu chỉ có mỗi app.use(express.json()) thì nó chỉ show ra mỗi videoId, còn thêm vào 2 thằng sau thì mới thêm dc toàn bộ, nếu không có cả 3 thằng, thì nó báo lỗi underfine của thằng videoId;

const route = require('./routes');
// trong các trường hợp mặc định thường server sẽ tự động truy cập vào các folder dc gọi, giả sử như folder routes trên vaf nếu không có gì thêm thì nó sẽ tự động truy cập vào fule index,js của mỗi folder
const db = require('./config/db');
db.connect();
// connect db

route(app);

// 1  lỗi cơ bản khi sử dụng nodeman, nếu chỉ sử đụng nó cho dev, với synt npm i nodemon --save-dev thay vì global như npm i -g nodemon@2.0.7 thì nó ko hoạt động, cái này có thể gặp ở những trường hợp khi ta sử dụng những gói khá trên dev thay vì cài vào code !
app.use(express.static(path.join(__dirname, "public")));
// phần này với mục đích tạo những file tĩnh-static, hay ở đây đơn giản là connect với việc tải hay nhận ảnh, từ thư mục phublic, và dĩ nhiên la cả với những folder hay filr khác năm trong thăng public

  // HTTH LOGGER

  app.use(morgan('combined'));

  app.use(express.urlencoded({   //url này đơn giản lầ midđleware
    extended: true
  }));
  // body-parser deprecated undefined extended báo lỗi này, ta làm như trên thì sẽ xóa dc lỗi báo này!
  // trong phần method post khác với method get là ta ko thể lấy trực tiếp giá trị mà user nhập vào form vì nó phải thông qua 1 phần trung gian là middleware, nên lệnh trên laf để đưa phần đó vào!
  app.use(express.json());
// gửi data từ js code lên server 
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
// console.log(__dirname);
app.set('views', path.join(__dirname, 'resources', 'views'));  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})