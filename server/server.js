const path = require('path');
const express = require('express');
//const hbs = require('hbs');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3003;

var app = express();

app.use(express.static(publicPath));

// app.get('/',(req,res)=>{
//   res.render()
// });

app.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
