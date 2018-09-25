const controller = require('./controller.js');

const router = require('express').Router();

// console.log(controller)
// router.get('/3001', controller.messages.get);

// router.post('/3002', controller.messages.post);

router.get('/waveformplayer/:id', controller.waveformPlayer);

// router.post('/3004', controller.users.post);


module.exports = router;
