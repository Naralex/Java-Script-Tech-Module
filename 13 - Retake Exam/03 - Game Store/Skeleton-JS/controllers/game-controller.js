const Game = require('../models/Game');

module.exports = {
  getIndex: function (req, res) {
      Game.find().then(games => res.render('index', {games: games}));
  },
  getCreate: function (req, res) {
      return res.render('create');
  },
  postCreate: function (req, res) {
      let gameInfo = req.body;
      Game.create(gameInfo).then(game => {res.redirect('/')
      });
  },
  getEdit: function (req, res) {
      let id = req.params.id;

      Game.findById(id).then(game => {
          res.render('edit', {game: game});
      });
  },
  postEdit: function (req, res) {
      let id = req.params.id;
      let gameInfo = req.body;

      Game.findByIdAndUpdate(id, gameInfo).then(gameInfo => {
          res.redirect('/')
      });
  },
  getDelete: function (req, res) {
      let id = req.params.id;

      Game.findById(id).then(game => {
          res.render('delete', {game: game});
      });
  },
  postDelete: function (req, res) {
      let id = req.params.id;
      let gameInfo = req.body;

      Game.findByIdAndRemove(id).then(gameInfo => {
          res.redirect('/')
      });
  }
};