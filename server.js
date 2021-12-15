const express = require('express')
const path    = require('path')
const cors = require("cors")


const app = express()
const staticFileMiddleware = express.static(path.join(__dirname, 'dist'))



app.use(staticFileMiddleware)
app.use(cors)


app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/src/main.js'))
})


var port = process.env.PORT || 9090
app.listen(port, function () {
    console.log( 'Express serving on 9090!' )
})