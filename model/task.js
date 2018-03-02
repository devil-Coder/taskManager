/**
 * Created by Raj Chandra on 01-03-2018.
 */
/**
 * Created by Raj Chandra on 7/26/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    title: {type: String},
    description: {type: String},
    isDone : {type : Boolean,default : false},
    createdOn : {type : Date, default : Date.now()},
    priority : {type : Number}
});


var task = module.exports = mongoose.model('taskManager', taskSchema);

