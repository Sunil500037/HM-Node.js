var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mailto:mongoose.connect("mongodb+srv://rajiv:rajiv23@hmnodejs.qy8hcdy.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
