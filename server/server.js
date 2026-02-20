const express = require('express');
const app = express();
const port  =  process.env.PORT || 9001;

app.get('/', (req, res) => {
  res.send('API en marche 🚀');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});