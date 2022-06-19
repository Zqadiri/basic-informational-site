
const https = require('node:http'); // include the HTTP module
// const { takeCoverage } = require('node:v8');

const host = '127.0.0.1';
const port = 8080;

/*
	The fs.readdirSync() method is used to synchronously read the contents of a given directory.
	The method returns an array with all the file names or objects in the directory.
*/

const fs = require('fs'); // include the file system module
const arrFiles = fs.readdirSync(__dirname);
// console.log(arrFiles);

const targetFiles = arrFiles.filter(file => file.endsWith('.html' ) || file.endsWith('.css'));
// console.log(targetFiles);

const requestListener = (req, res) => {
	var path = '';
	if (req.url == '/') {
			path = '/index.html';
			fs.readFile(__dirname + path, function (err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
	const sliceURL = req.url.slice(1);
	console.log("req url : " + sliceURL);
	if (sliceURL.endsWith('.css')){
		const cssFile = fs.readFileSync("./" + sliceURL, "utf8");
		res.setHeader("Content-Type", "text/css");
		res.end(cssFile);
	}
	else if (req.url == '/') {
		path = '/index.html';
		console.log("path : " + path);
		fs.readFile(__dirname + path, function (err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
	else{
		fs.readFile("./" + sliceURL + ".html", function (err, data) {
			if(err)
			{
				console.log("error : " + err);
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.end("<h1>404 Not Found</h1>");
			}
			
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		});
	}
};

const server = https.createServer(requestListener);

server.listen(port, host, () => {
	console.log(`Server running at http://${host}:${port}/`);
});
