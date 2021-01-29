require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./dbinit');

const errorHandler = require('./middleware/error');

const restaurants = require('./routes/restaurants');
const restaurantTags = require('./routes/restaurantTags');
const cities = require('./routes/cities');
const comments = require('./routes/comments');
const tags = require('./routes/tags');
//const restaurantTags = require('./routes/restaurantTags');

const server = express();
const PORT = 5000;
connectDB();

server.use(cors());
server.use(express.json());


server.use('/', restaurants);
server.use('/', cities);
server.use('/', comments);
server.use('/', tags);
server.use('/', restaurantTags);

server.use(errorHandler);

server.listen(PORT, () => console.log(`server connected on port ${PORT}`));