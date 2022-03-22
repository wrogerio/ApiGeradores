// requires
const express = require('express');
const router = express.Router();
const geradoresController = require('../controllers/geradoresController');

// routes
router.get('/api/gerador/:id', geradoresController.getGeadorByCodigo);

// export
module.exports = router;