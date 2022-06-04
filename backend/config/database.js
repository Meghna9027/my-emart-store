const mongoose = require("mongoose");
const { connect } = require("../app");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(
        (data) => {
            console.log(`Mongodb connect with server: ${data.connection.host}`);
        });
}

module.exports = connectDatabase