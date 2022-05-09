const express = require('express');

const PORT = process.env.PORT || null;

const app = express();

app.get('/', (req, res) => {
  return res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
