const mongoose = require('mongoose');
const URI = require('./default.json').mongoURI;

const connectDB = async () => {
    try {
        await mongoose
            .connect(URI, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        console.log("MongoDB Connected...")
    } catch (err) {
        console.log(err.message)
        process.exit(1);
    }
}

module.exports = {
    connectDB
};