const express = require('express');
const cors = require('cors');

const app = express();
const { PORT = 3311 } = process.env;

app.get('/', (req, res) => {
    res.send("WELCOME");
});

app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`);
});