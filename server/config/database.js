const mongoose = require('mongoose');


const ConnectDatabase = () => {

    mongoose.connect("mongodb://localhost:27017/employees")
        .then((data) => { console.log(`Database Connected with serevr ${data.connection.host}`) }).catch((error) => {
            console.log(error)
        })
}

module.exports = ConnectDatabase;