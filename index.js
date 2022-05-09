const express = require('express');

const PORT = process.env.PORT || null;
const SERVER_ENV = process.env.SERVER_ENV || null

const app = express();

app.get('/', (req, res) => {
  if (SERVER_ENV) {
    return res.status(200)
      .send({ message: `Dummy endpoint running on enviroment ${SERVER_ENV}` });
  }

  return res.status(200).send({ message: 'Dummy endpoint' });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
