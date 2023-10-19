const express = require('express');
const connectDatabase = require('./database/databaseConfig.js');
const colors = require('colors');
const morgan = require('morgan');
const cors = require("cors");
const router = require('./router/route');
const app = express();
const port = process.env.PORT|| 5000;


//middlewares
require("dotenv").config();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

//routes
app.use('/api', router);


//default
app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});


//route error 
app.use((req,res,next)=>{
  res.status(404).json({Message: "route not found"})
})


//handling server side error
app.use((err,req,res,next)=>{
  res.status(500).json({message:'something is broke'});
})


app.listen(port, () => {
  console.log(`> Server is up and running on : http://localhost:${port} `.green.bgWhite);
  connectDatabase();
});
