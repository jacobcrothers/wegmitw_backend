const express = require('express');

const app = express();

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use('/home', require('./routes/api/home'));
app.use('/analytics', require('./routes/api/analytics'));
app.use('/drops', require('./routes/api/drops'));

app.get('/', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '20', Accept: '*/*' })
        .then(res => console.log(res))
        .catch(err => console.error(err));
});

app.listen(5000, () => console.log('Server started on port 5000'));