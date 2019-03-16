const express = require('express');
const router = express.Router();

const WatchList = require('../models/watchlist.js');

//create route
router.post('/', (req, res) => {
  console.log(req.body);
  WatchList.create(req.body.coin, (err, createdWatchList) => {
    res.json(createdWatchList);
  });
});

//Read route
router.get('/', (req, res) => {
  WatchList.find({createdBy: req.session.currentUser}, (err, foundWatchList) => {
    res.json(foundWatchList);
  });
});

//Update Route
router.put('/:id', (req, res) => {
  WatchList.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWatchList) => {
    res.json(updatedWatchList);
  });
});

router.delete('/', (req, res) => {
  WatchList.findOneAndDelete(req.params, (err, deletedWatchList) => {
    res.json(deletedWatchList);
  });
});

module.exports = router;
