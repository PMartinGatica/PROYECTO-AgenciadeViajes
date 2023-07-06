const express = require('express');
const router = express.Router();

const {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales} = require('../controllers/paginasController.js');


router.get('/',paginaInicio);
router.get('/nosotros',paginaNosotros);
router.get('/viajes',paginaViajes);
router.get('/testimoniales',paginaTestimoniales);
// router.get('/contacto',(req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
//     res.send('Contacto');
// });

module.exports = router;
