
const Testimonial = require('../models/Testimoniales.js');
const guardarTestimonial = async(req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    //validando formulario
    const {nombre,correo,mensaje} = req.body;

    const errores =[];

    if (nombre.trim() === '') {
        errores.push({mensaje : 'El nombre esta vacio'})
    }
    if (correo.trim() === '') {
        errores.push({mensaje : 'El correo esta vacio'})
    }
    if (mensaje.trim() === '') {
        errores.push({mensaje : 'El mensaje esta vacio'})
    }

    if (errores.length > 0) {
        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();
        //mostrar vista con errores
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //ALmacenar en la BBDD
        
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = {
    guardarTestimonial
};