const router = require('express').Router();
const {show} = require('../controllers/pokemon');

router.get("/", show);

module.exports = router;