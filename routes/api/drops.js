const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('Hello, Drops API'));

router.get('/buyers', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { console.log(data); res.json(data) })
        .catch(err => { console.error(err); res.json(err) });
});

router.get('/whaletrack', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { console.log(data); res.json(data) })
        .catch(err => { console.error(err); res.json(err) });
});

router.get('/home', (req, res) => res.json({ 1: 'asdf' }));

module.exports = router;
