const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoId: {type: String, require: true},
  level: {type: String} ,
  slug: { type: String, slug: 'name', unique: true }
  // slug use name as a key in url, so that we have problem that if we add more than one name the same, we have multiples file with the same slug, so if click one of them, they will route to wrong adress, so to fix it, we use prop unique above
}, {
  timestamps: true,   //phần này là trong mặc định của mongoose từ version sau, để tạo ra phần create và update At khi ta tạo hay upsate lại kkhoas học!
});

module.exports = mongoose.model('Course', Course);