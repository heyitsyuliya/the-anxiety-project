const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

// logging
app.use(morgan('dev'));

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

(async function startServer() {
  try {
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT} http://localhost:3000/`)
    );
  } catch (err) {
    console.error(err);
  }
})();
