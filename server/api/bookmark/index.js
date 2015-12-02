var express = require('express');
var controller = require('./controller');


var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.insert);
router.delete('/', controller.remove);

module.exports = router;