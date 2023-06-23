const express = require('express')
const home = require('./routes/home')

const app = express()


app.use(express.json())
app.use('/home', home)

app.listen(6001, () => console.log('applistening'))