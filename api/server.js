import 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import rssParser from 'rss-parser';
import { MEDIA_LIST, extractImage } from './utils/media';

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
  return res.send(JSON.stringify(MEDIA_LIST));
});

server.get('/news/:media/:section', ({ params }, res) => {
  const indexMedia = MEDIA_LIST.findIndex(item => item.nameKey === params.media);
  if (indexMedia > -1) {
    const media = MEDIA_LIST[indexMedia];
    const sectionIndex = media && media.sections.findIndex(m => m.nameKey === params.section);
    if (sectionIndex > -1) {
      parser.parseURL(media.sections[sectionIndex].url).then(feed => {
        res.send(
          JSON.stringify(
            feed.items
              .filter(item => extractImage(item.content))
              .map(item => ({
                title: item.title,
                image: extractImage(item.content),
                description: `${item.contentSnippet.substring(0, 120)}...`,
                creationDate: item.pubDate,
                isoDate: item.isoDate,
                formattedDate: item.isoDate ? new Date(item.isoDate) : null,
                link: item.link
              }))
          )
        );
      });
    }
  }
  return { title: 'Hello World' };
});

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server is up and running at port ${process.env.PORT || 3001}`);
});
