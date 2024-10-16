const express=require('express')
const session = require('express-session');
const dotenv=require("dotenv")
const cors=require("cors")
const cron = require('node-cron');
const path = require('path');
const index = require('./routers/index');

dotenv.config()
const app = express()
// const db = require('./config/dbConnection');

app.use(cors())

app.use(
    session({
      secret: 'WSDMKDWK274YXMIWJRW83MMIQMNUR32MUEHEJ',
      resave: false,
      saveUninitialized: false,
      
    })
  );
app.use(express.json())

// Schedule the token cleanup job to run daily at midnight
// cron.schedule('0 0 * * *', () => {
//   require(path.join(__dirname, 'services', 'tokenCleanup.js'));
// });


app.use('/api/v1', index);

const buildPath = path.join(__dirname, './client','build')

app.use(express.static(buildPath))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client','build',"index.html"));
});

const PORT=process.env.PORT ||8000
app.listen(PORT,()=>{
     console.log(`server is running at port no ${PORT}`);
 })