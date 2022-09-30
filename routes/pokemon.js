const router = require('express').Router();
const {show, create} = require('../controllers/pokemon');

router.get("/", show);
router.post("/create",create);

module.exports = router;