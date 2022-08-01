//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/telephone-book'));

app.get('/*', (req, res) =>
<<<<<<< HEAD
  res.sendFile('index.html', {root: 'dist/telephone-book/'}),
=======
    res.sendFile('index.html', {root: 'dist/telephone-book/'}),
>>>>>>> 23b34d8c833db56ed93e3e8f0cdcc2fe181a1b7a
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
