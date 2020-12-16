const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
  console.log('Hello world received a request.');
  res.sendFile(path.join(__dirname, 'index.html'))//   const target = process.env.TARGET || 'World';
//   res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
