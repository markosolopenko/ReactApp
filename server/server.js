const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config')

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => {
    console.log("Connected to DB")
});
app.use("/products", require('./routes/products'));

app.listen(3001, () => {
    console.log("Server has been runed")
})