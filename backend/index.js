const fs = require('fs');
const Innertube = require('youtubei.js');

const express = require('express')
const cors = require('cors')
const app = express()
const port = 2216

app.get('/download/youtube/:id', cors(), (req, res) => {
  async function start() {
    const youtube = await new Innertube();
    const search = await youtube.search(`https://www.youtube.com/watch?v=${req.params.id}`);
    const stream = youtube.download(search.videos[0].id, {
      format: 'mp4', // Optional, ignored when type is set to audio and defaults to mp4, and I recommend to leave it as it is
      quality: '1080p', // if a video doesn't have a specific quality it'll fall back to 360p, also ignored when type is set to audio
      type: 'videoandaudio' // can be “video”, “audio” and “videoandaudio”
    });
    try {
      res.contentType('video/mp4');
      res.status(200);
      return stream.pipe(res);
    } catch (error) {
      console.log(err);
      return res(err);
    }
      // stream.pipe(fs.createWriteStream(`${search.videos[0].title}.mp4`));

      // stream.on('start', () => {
      //   console.info('[DOWNLOADER]', 'Starting download now!');
      // });

      // stream.on('info', (info) => {
      //   console.info('[DOWNLOADER]', `Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
      // });

      // stream.on('progress', (info) => {
      //   process.stdout.clearLine();
      //   process.stdout.cursorTo(0);
      //   process.stdout.write(`[DOWNLOADER] Downloaded ${info.percentage}% (${info.downloaded_size}MB) of ${info.size}MB`);
      // });

      // stream.on('end', () => {
      //   process.stdout.clearLine();
      //   process.stdout.cursorTo(0);
      //   console.info('[DOWNLOADER]', 'Done!');
      //   res.send('Downloaded Successfully.')
      // });

      // stream.on('error', (err) => {
      //   console.error('[ERROR]', err);
      //   res.send('Downloading Failed.')
      // });
    }
    start();
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})