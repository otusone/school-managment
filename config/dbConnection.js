
const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URI;
const Teacher=require("../models/teacher")
const SchoolClass=require("../models/class")

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async() => {
    console.log('Connected to MongoDB');

    // SchoolClass.updateMany(
    //   { school: { $exists: false } },
    //   {
    //     $set: { school: "67139da0575e7a49b4179247" },
    //   }
    // ).then(result => {
    //   console.log('Updated records: ', result);
    // }).catch(error => {
    //   console.error('Error updating records: ', error);
    // });

    // await Teacher.collection.dropIndex({ schoolCode: 1 });
    // await Teacher.collection.dropIndex({ adminSchoolId: 1 });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
