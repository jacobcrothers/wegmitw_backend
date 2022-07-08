const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello, Analytics API'));

//Overview API
router.get('/ov/barometer', (req, res) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('https://api.nftgo.io/api/v2/ranking/collections?offset=0&limit=10&by=marketCap&asc=-1&rarity=-1&keyword=&fields=marketCap,marketCapRanking,marketCapChange24')
        .then(dat => {
            res.json(dat);
        });
})

router.get('/ov/mark_cap', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
})

router.get('/ov/holder', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
})

router.get('/ov/category', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
})

router.get('/ov/coll_dist', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
})

router.get('/ov/top_coll', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
})

//Top collections Tab
router.get('/tc/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});


//Newly Added Tab
router.get('/new/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});


//Top Mints Tab
router.get('/top_mints/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});


//Top Sales Tab
router.get('/top_sales/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});

//Leaderboard Tab
router.get('/leaderboard/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});

//marketplace Tab
router.get('/marketplace/get_all', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '10', Accept: '*/*' })
        .then(data => { res.json(data) })
        .catch(err => { res.json(err) });
});
module.exports = router;
