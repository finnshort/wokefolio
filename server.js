import express from 'express';

import fs from 'fs';
import Papa from 'papaparse';

const app = express();
const port = process.env.PORT || 3001;

app.get('/securities', (req, res) => {
  const dataRaw = fs.readFileSync('./ishares-esg-hackathon.csv', {'encoding': 'UTF-8'});
  const data = Papa.parse(dataRaw);
  const dataFormatted = data.data.slice(1).map((row) => {
    return {
      'name': row[0],
      'Environment': row[7],
      'Social': row[8],
      'Governance': row[9],
      'Controversy': row[10]
    };
  });
  res.send(dataFormatted);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
