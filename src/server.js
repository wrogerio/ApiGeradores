// requires
const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/routes');

// set up express app
const app = express();

// middleware
app.use(express.json({ encoding: "utf-8", type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(morgan('dev'));

// routes
app.use(router);

// listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}. http://localhost:${port}`);
});
