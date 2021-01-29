require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./dbinit');

const errorHandler = require('./middleware/error');

const nouns = require('./routes/nouns');
const users = require('./routes/users');
const scores = require('./routes/scores');
const auth = require('./routes/auth');

const server = express();
const PORT = 5000;
connectDB();

server.use(cors());
server.use(express.json());


server.use('/restaurants', restaurants);

server.use(errorHandler);

server.listen(PORT, () => console.log(`server connected on port ${PORT}`));