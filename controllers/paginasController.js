const Viaje = require('../models/Viaje.js')
const Testimonial = require('../models/Testimoniales.js')
const paginaInicio = (req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    res.render('inicio',{
        pagina:'Inicio'
    });
}

const paginaNosotros = (req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    //consultar BD
    const viajes =await Viaje.findAll();

    console.log(viajes);

    res.render('viajes',{
        pagina: 'Próximos viajes',
        viajes,
    });
}
const paginaTestimoniales = async(req,res)=>{ //req - lo que enviamos y res- lo que express nos responde
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });
        
    } catch (error) {
        console.log(error)
    }
    
}

const paginaDetalleViaje = async (req,res) =>{
    const{slug} = req.params;
    try {
        const viaje = await Viaje.findOne({where :{slug}});
        res.render('viaje',{
            pagina: ' Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
                paginaInicio,
                paginaNosotros,
                paginaTestimoniales,
                paginaViajes,
                paginaDetalleViaje};