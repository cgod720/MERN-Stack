const express = require('express');
const router = express.Router();

const WatchList = require('../models/watchlist.js');

//create route
router.post('/', (req, res) => {
  console.log(req.body);
  WatchList.create(req.body, (err, createdWatchList) => {
    res.json(createdPlace);
  });
});

//Read route
router.get('/', (req, res) => {
  WatchList.find({createdBy: req.session.currentUser.id}, (err, foundWatchList) => {
    res.json(foundWatchList);
  });
});

//Update Route
router.put('/:id', (req, res) => {
  WatchList.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWatchList) => {
    res.json(updatedWatchList);
  });
});

router.delete('/:id', (req, res) => {
  Watchlist.findByIdAnDelete(req.params.id, (err, deletedWatchList) => {
    res.json(deletedPlace);
  });
});

module.exports = router;
