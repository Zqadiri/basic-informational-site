
/*
    TODO: npm install eslint --save-dev
    If a dependency is only used during development, you should instead save it as a "development dependency" 
    (so that your package users don't have to install it in production)
*/

/*
    TODO: npm install express-generator -g
    The Express Application Generator tool generates an Express application "skeleton".
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + '/style.css');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
	res.sendFile(__dirname + '/contact-me.html');
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});