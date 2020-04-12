console.log('Server loading...')
const IP = process.env.IP || '127.0.0.1'
const PORT = process.env.PORT || 8080

//load main modules
const express = require('express')
const path = require('path')

const app = express()

//load express middleware
const logger = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const favicon = require('serve-favicon')

//insert middleware
app.use(logger('dev'))
app.use(helmet())
app.use(compression())
app.use(favicon('./img/favicon.ico'))

//REST endpoints

//default web server stuff
app.use(express.static('.'))

//404
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '404.html'))
})

//start the server
const server = app.listen(8080, '127.0.0.1', function() {
  console.log(`Server is listening at http://${IP}:${PORT}/index.html`)
})

//shutdown the server
function gracefulShutdown() {
  console.log('\nStarting shutdown')
  server.close(function() {
    console.log('Shutdown complete')
  })
}

process.on('SIGTERM', gracefulShutdown)
