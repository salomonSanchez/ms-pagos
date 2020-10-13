const modelos = require('../database/dbconf')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome:  visit /consultar/cursos ')
})

router.get('/pagos/consultar/pagos', async(request, response) => {
    try {
        var result = await modelos.PagoModel.find().exec();
        response.json(result);
    } catch (error) {
        response.status(500).send(error);
    }
});


router.get('/pagos/validarpago/:estudiante_id', async(request, response) => {
    try {
        var result = await modelos.PagoModel.find({ codigo_estudiante: request.params.estudiante_id }).exec();
        if (result[0].monto_pago > 0 && (result[0].codigo_estudiante && result[0].codigo_estudiante) !== null) {
            response.send(true);
        } else {
            response.send(false);
        }
    } catch (error) {
        response.status(500).send(error);
    }
});


router.post("/pagos/registrar/pago", async(request, response) => {
    try {
        var pago = new modelos.PagoModel(request.body);
        var result = await pago.save();
        //response.send(result);
        response.send(result)

    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = router;