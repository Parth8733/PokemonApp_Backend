const router = require('express').Router();
const {show, create} = require('../controllers/pokemon');
/**
 * End points for Pokemon controllers
 */
router.get("/", show);
router.post("/create",create);

module.exports = router;