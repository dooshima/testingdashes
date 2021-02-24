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

app.use(cors());

app.get('/*',(req,res) => {
   res.header('Access-Control-Allow-Origin', 'https://helloworld.com.ng/medflit-api/api/login');
    res.header('Access-Control-Allow-Headers', 'Content-Type, token, authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  res.sendFile(path.join(__dirname , 'build', 'index.html'))
})

app.listen(port, _ =>{
  console.info(`server started on port ${port}`)
})


