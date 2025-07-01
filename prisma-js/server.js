import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello, Express with ES6!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
