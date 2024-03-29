const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const cors = require('cors')
const errorHandler = require("./middlewares/errorHandler")

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('App is tunning on http://localhost:' + PORT)
})