const path = require('path');
const Shark = require('../models/sharks');

exports.index = function (req, res) {
        res.sendFile(path.resolve('views/sharks.html'));
};

exports.create = async function (req, res) {
        try {
                let newShark = new Shark(req.body);
                let savedShark = await newShark.save(); // Now uses async/await
                res.json(savedShark);
        } catch (err) {
                res.status(400).send(err);
        }
};
      

exports.list = function (req, res) {
        Shark.find({}).exec(function (err, sharks) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getshark', {
                        sharks: sharks
                });
        });
};