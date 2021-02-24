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
    " https://medflit-dashboard.herokuapp.com/http://helloworld.com.ng/medflit-api/api/login"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.sendFile(path.join(__dirname , 'build', 'index.html'))
})

app.listen(port, _ =>{
  console.info(`server started on port ${port}`)
})


