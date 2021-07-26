require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads') 
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname + '-' + Date.now())
  }
});

const fileFilter = (req, file, callback) => {
  if (file.minetype !== 'image/png') {
    throw ({ message: 'extension must be "png"' })
  }
};

const upload = multer({ storage })

app.get('/ping', controllers.ping);

app.post('/upload', upload.single('file'), (req, res, next) => {
  console.log(req)
  res.status(200).json({ message: 'OK' })
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
