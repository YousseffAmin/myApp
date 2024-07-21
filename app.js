const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request Path: ${req.path}`);
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.render('user', { username });
});

app.post('/submit', (req, res) => {
  const data = req.body.data;
  console.log(data); 
  res.send('Success');
});

app.get('/download', (req, res) => {
  const file = `${__dirname}/public/sample.txt`;
  res.download(file);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
