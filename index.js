import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.json({ message: 'Y are you gay?'});
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT} at ${HOST}`);
});