const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors);

const PORT = '5000' || process.env.PORT;

app.post('/upload', (req, res) => {

    res.json({
        file: 'Uploaded'
    });

});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));