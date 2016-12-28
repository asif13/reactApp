const express = require('express');

const app = express();
const port = process.env.PORT || 1337;
const httpServer = require('http').createServer(app);

const albumList = [{ artist: 'Muse', thumbnail_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg', title: 'here we go again', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg' },
{ artist: 'Muse', thumbnail_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg', title: 'Its gonna be ', url: 'https://google.com' },
{ artist: 'Muse', thumbnail_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg', title: 'Not gonna stop ', url: 'https://google.com' }];

app.get('/albumList', (req, res) => {
  res.status(200).send(albumList);
});

app.get('/image', (req, res) => {
  res.sendFile('./images/helisnki1.jpg');
});


httpServer.listen(port, () => {
    console.log('sp ${port}.');
});
