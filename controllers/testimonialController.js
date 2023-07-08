const guardarTestimonial = (req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    //validando formulario
    const {nombre,correo,mensaje} = req.body;

    const errores =[];

    if (nombre.trim()=== '') {
        errores.push({mensaje : 'El nombre esta vacio'})
    }
    if (correo.trim()=== '') {
        errores.push({mensaje : 'El correo esta vacio'})
    }
    if (mensaje.trim()=== '') {
        errores.push({mensaje : 'El mensaje esta vacio'})
    }

}

module.exports = {
    guardarTestimonial};