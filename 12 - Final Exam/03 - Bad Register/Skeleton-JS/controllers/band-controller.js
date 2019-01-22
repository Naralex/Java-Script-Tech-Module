const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
      Band.find().then(bands => res.render('index', {bands: bands}));
    // return res.render('')
  },
  getCreate: function (req, res) {
    return res.render('create')
  },
  postCreate: function (req, res) {
      let bandInfo = req.body;
      Band.create(bandInfo).then(band => {res.redirect('/')
    });
  },
  getEdit: function (req, res) {
      let id = req.params.id;

      Band.findById(id).then(band => {
              res.render('edit', {band: band});
      });
  },
  postEdit: function (req, res) {
      let id = req.params.id;
      let bandInfo = req.body;

      Band.findByIdAndUpdate(id, bandInfo).then(bandInfo => {
          res.redirect('/')
   });
  },
  getDelete: function (req, res) {
      let id = req.params.id;

      Band.findById(id).then(band => {
          res.render('delete', {band: band});
      });
  },
  postDelete: function (req, res) {
      let id = req.params.id;
      let bandInfo = req.body;

      Band.findByIdAndRemove(id).then(bandInfo => {
          res.redirect('/')
      });
  }
};