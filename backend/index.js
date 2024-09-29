require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require("fs")
const path = require('path');
const router = require('./router/index');

const app = express();
const port = process.env.PORT;

const directoryPath = path.join(__dirname);
const filePath = path.join(directoryPath, 'userdetails.json');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({"user": []}));
}


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello, World!');
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
