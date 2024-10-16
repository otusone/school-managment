
const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URI;


mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // User.updateMany(
    //   { aadharCardFrontImg: { $exists: false }, aadharCardBackImg: { $exists: false } },
    //   {
    //     $set: { aadharCardFrontImg: "" },
    //     $set: { aadharCardBackImg: "" }
    //   }
    // ).then(result => {
    //   console.log('Updated records: ', result);
    // }).catch(error => {
    //   console.error('Error updating records: ', error);
    // });

  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
