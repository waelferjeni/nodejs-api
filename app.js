const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const swaggerDoc = require('./swagger')
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

//console.log(MONGODB_URI)
const app = express();
app.use(express.json());
app.use('/auth',authRoutes)
app.use('/posts',postRoutes)
app.use('/api-doc',swaggerDoc.serve,swaggerDoc.setup)

//test app first route
app.get('/',(req,res)=>{
    return res.status(200).send('hello chabeb !')
})
// connection to mongodb and start server 
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to MongoDb');
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`)
    })
}).catch((err) =>{
    console.error('Error connecting to mongodb:',err.message)
})

module.exports = app