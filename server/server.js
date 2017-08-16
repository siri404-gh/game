const express = require('express');
const app = express();
app.use('/', express.static('.'));
app.listen(5000, () => {
  console.log('info', 'ExpressJS listening on port:', 5000);
});