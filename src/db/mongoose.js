const mongoose = require("mongoose");

const connectionUrl = process.env.MONGODB_URL;

mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});
