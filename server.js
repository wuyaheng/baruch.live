require('./config/db').connectDB();
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json({
    extended: false
}));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


//Define Routes
app.use(require('./routes'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));