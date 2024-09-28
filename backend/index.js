const express = require('express');
const cors = require('cors');
const fs = require("fs")
const path = require('path');
require('dotenv').config();

const directoryPath = path.join(__dirname);
const filePath = path.join(directoryPath, 'userdetails.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({"user": []}));
}

const router = require('./router/index');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
