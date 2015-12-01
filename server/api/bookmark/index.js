var express = require('express');
var controller = require('./controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.delete('/:id', controller.remove);

module.exports = router;