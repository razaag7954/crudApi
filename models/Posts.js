const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
   first_name:{
       type: String,
       required: true
   },
   last_name:{
    type: String,
    required: true
   },
   email:{
    type: String,
    required: true
},
   degree: {
       type:String,
        required: true
   },
   uni_name: {
    type:String,
     required: true
},
batch_year:{
    type: Date,
    required:true,
    default: Date.now
},
   passing_year:{
       type: Date,
       required:true,
       default: Date.now
   }
});
module.exports = mongoose.model('Posts', PostSchema)