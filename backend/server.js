const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve index.html as the default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/signup.html'));
});

app.listen(port, () => {
  console.log(`Server running on port :${port}`);
});

