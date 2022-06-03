const express = require('express');
const app = express();
const path = require('path');
app.use('/public', express.static(path.join(__dirname, '/public')));
app.get('/', (req, res, next) => {
    const Homepage = path.join(__dirname, 'home.html');
    res.sendFile(Homepage)
})
app.listen(3000, () => {
    console.log('Server is running')
})