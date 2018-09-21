const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use('/songs/:id', express.static(path.join(__dirname, 'public')));
/* * * * * * * * * * * For SocialArea * * * * * * * * * * */
app.get('/api/stats/:id', (req, res) =>{
  axios.get(`http://localhost:3004/api/stats/${req.params.id}`)
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
 axios.get(`http://localhost:3002/relatedTracks/${songId}`)
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
 axios.get(`http://localhost:3002/relatedAlbums/${songId}`)
   .then(({ data }) => {
     console.log('Related Albums', data);
     res.json(data);
   })
   .catch((error) => {
     console.log(error);
   });
});
//

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})
