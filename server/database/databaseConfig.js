const mongoose = require('mongoose')
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/quizmania'

const connectDatabase = async()=>{
    try {
      await  mongoose.connect(uri , { useNewUrlParser : true, useUnifiedTopology : true})
      console.log('> Database Connected...'.bgCyan);
    } catch (error) {
        console.log(`> Error while connecting to mongoDB : ${error.message}`.underline.red );
        process.exit(1);  
    }
}

module.exports = connectDatabase;