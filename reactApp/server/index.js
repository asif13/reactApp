const express = require('express');

const app = express();
const port = process.env.PORT || 1337;
const httpServer = require('http').createServer(app);

const albumList = [{ artist: 'X Ambassadors', thumbnail_image: 'https://upload.wikimedia.org/wikipedia/en/c/cb/X_Ambassadors_-_Renegades_cover_art.jpg', title: 'Renegades', image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/VHS_X_ambassadors.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg' },
{ artist: 'KYGO', thumbnail_image: 'https://i.ytimg.com/vi/jbZusVDBf4A/maxresdefault.jpg', title: 'Firestones', image: 'https://static1.squarespace.com/static/5320cb1de4b04530adba57b7/t/5511a3a4e4b03e2c6277c5bb/1427219369152/', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg' },
{ artist: 'Artic Monkeys', thumbnail_image: 'https://s-media-cache-ak0.pinimg.com/736x/77/16/43/771643abae33c01bd70e7bcc2bcf0fb0.jpg', title: 'Feels Like we only go backwards', image: 'https://i.ytimg.com/vi/xuw2E9AU9Q4/maxresdefault.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muse_at_Air_Canada_Centre.jpg/320px-Muse_at_Air_Canada_Centre.jpg' }];

app.get('/albumList', (req, res) => {
  res.status(200).send(albumList);
});

app.get('/image', (req, res) => {
  res.sendFile('./images/helisnki1.jpg');
});


httpServer.listen(port, () => {
    console.log('sp ${port}.');
});
