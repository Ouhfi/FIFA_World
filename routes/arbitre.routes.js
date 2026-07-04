const express = require('express');
const router = express.Router();
const arbitreController = require('../controllers/arbitre.controller');

// توجيه كل رابط للـ fonction المناسبة فالـ controller
router.post('/', arbitreController.createArbitre);
router.get('/', arbitreController.getAllArbitres);
router.get('/:id', arbitreController.getArbitreById);
router.put('/:id', arbitreController.updateArbitre);
router.delete('/:id', arbitreController.deleteArbitre);

module.exports = router;