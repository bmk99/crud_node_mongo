const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// for .env 
const app = express()
dotenv.config()


// data getting and sending in the format of json 
app.use(express.json())


//routes
const productRoute = require("./routes/productRoutes")
const homeRoute = require("./routes/homeRoutes")


// mongoose connection
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// accesing the routes 
app.use("/api/home/",homeRoute)
app.use("/api/products/",productRoute)


// directly from the server.js file
app.get('/', (req, res) => {
    res.send('directly from the home')
})

// calling the server
const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:8800`)
});

