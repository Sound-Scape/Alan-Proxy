const express = require('express');
const path = require('path');
const axios = require('axios');
const routes = require('./routes.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/songs/:id', express.static(path.join(__dirname, 'public')));
app.use('/api', routes);
/* * * * * * * * * * * For SocialArea * * * * * * * * * * */
app.get('/api/stats/:id', (req, res) =>{
  axios.get(`http://server-env-1.phjpybupp3.us-west-1.elasticbeanstalk.com/api/stats/${req.params.id}`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  })
})
/* * * * * * * * * * * For RelatedList * * * * * * * * * * */
app.get('/relatedTracks/:id', (req, res) => {
 // res.send(req.params.id)
 const songId = req.params.id;
 axios.get(`http://18.219.127.175/relatedTracks/${songId}`)
   .then(({ data }) => {
     console.log('Related Tracks', data);
     res.json(data);
   })
   .catch((error) => {
     console.log(error);
   });
});

app.get('/relatedAlbums/:id', (req, res) => {
 const songId = req.params.id;
 axios.get(`http://18.219.127.175/relatedAlbums/${songId}`)
   .then(({ data }) => {
     console.log('Related Albums', data);
     res.json(data);
   })
   .catch((error) => {
     console.log(error);
   });
});
/* * * * * * * * * * * For Comment-Section * * * * * * * * * * */
app.get('/api/comments/:songid', (req, res) => {
  // console.log(`http:/localhost:3001/api/${req.params.songid}`);
  axios.get(`http://comments-server.2u82f9p8mx.us-east-2.elasticbeanstalk.com/api/comments/${req.params.songid}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
/* * * * * * * * * * * For Waveform-Player * * * * * * * * * * */

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
