const express = require('express');
const path = require('path');
const axios = require('axios');
const { getParametersFromCsv } = require('./js/getParametersFromCsv.js');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', index.html));
});

// Endpoint to get city and country data
app.get('/api/cities', async (req, res) => {
  try {
    const data = await getParametersFromCsv();
    const cityCountryPairs = data.map(result => ({
      city: result.city,
      country: result.country,
      latitude: result.latitude,
      longitude: result.longitude
    }));
    res.json(cityCountryPairs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load city coordinates' });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const { longitude, latitude } = req.query;
    const apiUrl = `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civil&output=json`
    const response = await axios.get(apiUrl);
    const data = response.data;
    res.json(data.dataseries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch API' })
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
