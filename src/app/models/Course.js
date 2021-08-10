const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: {type: String, require: true},
  description: {type: String},
  image: {type: String},
  videoId: {type: String, require: true},
  level: {type: String} 
}, {
  timestamps: true,   //phần này là trong mặc định của mongoose từ version sau, để tạo ra phần create và update At khi ta tạo hay upsate lại kkhoas học!
});

module.exports = mongoose.model('Course', Course);