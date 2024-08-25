const connectToMongo = require('./db');
const express = require('express')
require('dotenv').config()
var cors = require('cors') 

const app = express()
const port = process.env.PORT
const db_url=process.env.DATABASE_URL;
connectToMongo(db_url);

app.use(cors())
app.use(express.json())

// routes
app.use(require('./controllers/adminController'))
app.use(require('./controllers/consultationController'))
app.use(require('./controllers/doctorController'))
app.use(require('./controllers/patientController'))


app.listen(port, () => {
  console.log(`doctor backend listening at http://localhost:${port}`)
})