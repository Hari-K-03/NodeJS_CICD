const express = require('express');

const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
    res.json({
        status: 'Application is running successfully'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});