const express = require('express')
const mongoose = require('mongoose')

const { MONGO_URI} = require('./config')

// routes
const PostRoutes = require('./routes/api/posts')
const app = express()

// body parser
app.use(express.json());
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Mongodb is connected"))
    .catch( err => console.log(err));

// use roputes
app.use('/api/posts', PostRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Hello from ${PORT}`))