

const express = require('express')
const path    = require('path')
const cors = require("cors")

const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {
    fs.readFile('index.html', 'utf-8', (err, content) => {
      if (err) {
        console.log('We cannot open "index.html" file.')
      }
  
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      })
  
      res.end(content)
    })
  }).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
  })

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, 'dist'))



app.use(staticFileMiddleware)
app.use(cors())


app.get('/:mesa', function (req, res) {
    res.render(path.join(__dirname + '/src/main.js'))
})


var port = process.env.PORT || 9090
app.listen(port, function () {
    console.log( 'Express serving on 9090!' )
})

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
})