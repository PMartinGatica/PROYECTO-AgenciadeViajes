const express = require('express');
const router = express.Router();

const {
        paginaInicio,
        paginaNosotros,
        paginaViajes,
        paginaTestimoniales,
        paginaDetalleViaje} = require('../controllers/paginasController.js');

const {guardarTestimonial} = require('../controllers/testimonialController.js');


router.get('/',paginaInicio);
router.get('/nosotros',paginaNosotros);
router.get('/viajes',paginaViajes);
router.get('/viajes/:slug',paginaDetalleViaje);
router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial);
// router.get('/contacto',(req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
//     res.send('Contacto');
// });

module.exports = router;
