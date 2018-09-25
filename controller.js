const axios = require('axios');

module.exports = {
  waveformPlayer: function(req, res) {
    axios(`http://18.219.124.16/api/waveformplayer/${req.params.id}`)
    .then(function(response) {
     res.send(response.data)
    })
    .catch(function(error) {
      console.log(error);
    })
  }
}
