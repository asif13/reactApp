const express = require('express');

const app = express();
const port = process.env.PORT || 1337;
const httpServer = require('http').createServer(app);

const albumList = [{ artist: 'Muse', image: './images/helisnki1.jpg', title: 'here we go again', url: 'https://google.com' },
{ artist: 'Muse', image: './images/helisnki1.jpg', title: 'here we go again', url: 'https://google.com' }];

app.get('/albumList', (req, res) => {
  res.status(200).send(albumList);
});

app.get('/image', (req, res) => {
  res.sendFile('./images/helisnki1.jpg');
});


httpServer.listen(port, () => {
    console.log('sp ${port}.');
});
