const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const  bodyParser = require('body-parser') ;
const petAPI = require('./src/api/pet');


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8055;
const MONGODB_URI =  process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}, (error) =>{
    if (error){
        console.log('Database Error:', error.message);
    }
});
mongoose.connection.once('open', () =>{
    console.log('db connected');
});

app.use('/pet',petAPI());

app.listen(PORT , () =>{
    console.log(`Server is up and running ${PORT}`)
})