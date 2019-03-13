const mongoose = require('mongoose');

const watchListSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  coin: Object,
  createdBy: String
});

const WatchList = mongoose.model('WatchList', watchListSchema);

module.exports = WatchList;
