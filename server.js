require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./dbinit');

const errorHandler = require('./middleware/error');

const restaurants = require('./routes/restaurants');
const cities = require('./routes/cities');
const comments = require('./routes/comments');
const tags = require('./routes/tags');

const server = express();
const PORT = 5000;
connectDB();

server.use(cors());
server.use(express.json());


server.use('/', restaurants);
server.use('/', cities);
server.use('/', comments);
server.use('/', tags);

server.use(errorHandler);

server.listen(process.env.PORT || 5000, '0.0.0.0', () => console.log(`server connected on port ${PORT}`));