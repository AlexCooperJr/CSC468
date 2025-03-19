const express = require('express');
const router = express.Router();
const Shark = require('../models/sharks');

router.get('/', async (req, res) => {
  try {
    const sharks = await Shark.find();
    res.render('sharks', { sharks }); 
  } catch (err) {
    res.status(500).send("Error fetching sharks");
  }
});

router.post('/addshark', async (req, res) => {
  try {
    const { name, character } = req.body;
    const newShark = new Shark({ name, character });
    await newShark.save();
    res.redirect('/sharks'); 
  } catch (err) {
    res.status(500).send("Error saving shark");
  }
});

module.exports = router;
