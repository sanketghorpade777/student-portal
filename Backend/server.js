const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();



const PORT = 5000 || process.env.PORT

const connectDB = require('./config/db');
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use(express.urlencoded({extended:false}))




app.post('/',require('./Routes/authRoutes'))
app.post('/register',require('./Routes/authRoutes'))
app.get('/profile',require('./Routes/authRoutes'))



app.listen(3000 , () => {
    console.log(`Listenting On Port ${PORT}`)
})