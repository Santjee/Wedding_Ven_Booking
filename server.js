const app = require('./app');

const connectDB = require('./src/config/connectDB.js')

require('dotenv').config();


const PORT = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/db_vm";
//database Connection

app.listen(PORT, () => {
    connectDB(DATABASE_URL);
    console.log(`Server is running on port ${PORT}`)
})