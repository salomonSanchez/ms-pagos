const mongoose = require('mongoose')
const uri = "mongodb+srv://ms:microservicios@cluster0.lkdhv.mongodb.net/microservicios?retryWrites=true&w=majority";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const PagoModel = mongoose.model("pagos", {
    cod_estudiante: String,
    cod_curso: String,
    monto_pago: String
});

module.exports = {
    PagoModel
}