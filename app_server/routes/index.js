var express = require('express');
var router = express.Router();

var ctrlLocation = require('../controllers/location');
var ctrlOthers = require('../controllers/others');

/* страницы местоположений */
router.get('/', ctrlLocation.homelist);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/* другие страницы */
router.get('/about', ctrlOthers.about);

module.exports = router;
