const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const CLIENT_ID = process.env.FORGE_CLIENT_ID;
const CLIENT_SECRET = process.env.FORGE_CLIENT_SECRET;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/forge/oauth/token', async (req, res) => {
    try {
        const response = await axios.post('https://developer.api.autodesk.com/authentication/v1/authenticate', 
        {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'client_credentials',
            scope: 'data:read data:write data:create bucket:read bucket:create'
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        res.json(response.data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
