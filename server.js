var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');
var fs = require('fs');
var atob = require('atob');
var path = require('path');

var DEST_PATH = './public';

app.use(cors());
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const p = atob(file.originalname);
    const dirPath = path.dirname(p);
    const destPath = path.join(DEST_PATH, dirPath);
    fs.mkdirSync(destPath, { recursive: true });
    cb(null, destPath);
  },
  filename: function(req, file, cb) {
    const p = atob(file.originalname);
    const baseName = path.basename(p);
    cb(null, Date.now() + '-' + baseName);
  },
});

var upload = multer({ storage: storage }).array('file');

app.get('/', function(req, res) {
  return res.send('Hello Server');
});
app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      return res.status(500).json(err);
      // An unknown error occurred when uploading.
    }

    return res.status(200).send(req.file);
    // Everything went fine.
  });
});

app.listen(8000, function() {
  console.log('App running on port 8000');
});
