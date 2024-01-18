const express = require('express');
const router = express.Router();

const CarController = require('./controllers/CarController');


router.get('/cars', CarController.buscarTodos);
router.get('/car/:codigo', CarController.buscarUm);
router.post('/car', CarController.inserir);
router.put('/carro/:codigo', CarController.alterar);
router.delete('/carro/:codigo', CarController.excluir);


module.exports = router;