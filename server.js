const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next)=>{
  res.sendFile(__dirname, 'index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));
