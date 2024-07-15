const express = require('express');
const path = require('path');
const app = express();

// Vue.js üretim dosyalarına servis verin
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API routes
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
