const express = require('express');
const router = express.Router();
const axios = require('axios');
router.get('/', (req, res) => res.send('Hello, Home API'));

router.get('/top_trending', (req, res) => {
    res.json(globalData);
});

router.post('/buyers', (req, res) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('https://api.nftgo.io/api/v2/ranking/collections?offset=0&limit=10&by=marketCap&asc=-1&rarity=-1&keyword=&fields=marketCap,marketCapRanking,marketCapChange24')
        .then(dat => {
            res.json(dat);
        });
    // const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    // sdk.auth('demo-api-key');
    // sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
    //     .then(data => { res.json(data) })
    //     .catch(err => { res.json(err) });
    //res.json(globalData)
});
router.get('/buyers', (req, res) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('https://api.nftgo.io/api/v2/ranking/collections?offset=0&limit=10&by=marketCap&asc=-1&rarity=-1&keyword=&fields=marketCap,marketCapRanking,marketCapChange24')
        .then(dat => {
            res.json(dat);
        });
});

router.get('/whaletrack', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});

router.post('/drops', (req, res) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('https://api.nftgo.io/api/v2/ranking/collections?offset=0&limit=10&by=marketCap&asc=-1&rarity=-1&keyword=&fields=marketCap,marketCapRanking,marketCapChange24')
        .then(dat => {
            res.json(dat);
        });
});

router.get('/home', (req, res) => res.json({ 1: 'asdf' }));

module.exports = router;
