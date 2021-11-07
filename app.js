const epxress = require('express')
const app = epxress()
const bodyParser = require('body-parser')
require('dotenv/config')
const dbo = require('./config/database')
app.get('/',(req,res) => {
    res.send('api node js')
})
app.use(bodyParser.json())
const posts = require('./routes/posts')
app.use('/posts',posts)

app.listen(3000)