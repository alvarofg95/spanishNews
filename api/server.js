import 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import rssParser from 'rss-parser';
import MEDIA_LIST from './utils/media';

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

const parser = new rssParser();

server.get('/media-list', (req, res) => {
  // res.mediaList = MEDIA_LIST;
  return res.send(JSON.stringify(MEDIA_LIST));
});

server.get('/news/:media', ({ params }, res) => {
  const indexMedia = MEDIA_LIST.findIndex(item => item.name === params.media);
  if (indexMedia > -1) {
    parser.parseURL(MEDIA_LIST[indexMedia].url).then(feed => {
      console.log(feed.title);
      feed.items.forEach(item => {
        console.log(item.title + ':' + item.link);
      });
    });
  }
  return { title: 'Hello World' };
});

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server is up and running at port ${process.env.PORT || 3001}`);
});
