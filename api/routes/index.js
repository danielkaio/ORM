const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.get("/",(req,res)=> res.send("ola"))
  app.use(pessoas)
}