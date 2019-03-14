const mongoose = require('mongoose');

const watchListSchema = new mongoose.Schema({
  coin: Array,
  createdBy: String
});

const WatchList = mongoose.model('WatchList', watchListSchema);

module.exports = WatchList;
