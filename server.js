const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')))
app.get('/api', (req,res) => {
  res.json({
     message:'This is the api endpoint for testing'
  })
})

app.get('/*',(req,res) => {
  res.header(
    "Access-Control-Allow-Origin",
    );

  res.sendFile(path.join(__dirname , 'build', 'index.html'))
})

app.listen(port, _ =>{
  console.info(`server started on port ${port}`)
})


// app.use(favicon(__dirname + '/build/favicon.ico'));
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.listen(port);
