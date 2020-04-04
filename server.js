const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser')

/** CONFIG **/
app.use(express.static(__dirname));
app.use(bodyParser.json())
app.set('view engine', 'pug');

/** STARTUP **/
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

/** ROUTES **/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/*', (req, res) => {
  res.redirect('/')
})

module.exports = app;