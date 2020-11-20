const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));


//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));



if(process.env.NODE_ENV==='production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client','build','index.html'))); 
}


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
