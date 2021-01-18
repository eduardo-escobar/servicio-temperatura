import {Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { CiudadService } from './ciudad.service';

@Controller('ciudad')
export class CiudadController {

    constructor(private ciudadSv: CiudadService){}
    
    /**
     * Retorna las ciudades con información de la temperatura y hora
     * @param response 
     */
    @Get()
    ObtenerDatosDeCiudades(@Res() response) {

        this.ciudadSv.ObtenerDatoDeCiudadades()
            .then(ciudades => {
                response.status(ciudades ? HttpStatus.OK : HttpStatus.FORBIDDEN)
                    .json({ ok: ciudades ? true : false, mensaje: { ciudades } });
            })
            .catch(error => {
                console.log(error);
                response.status(HttpStatus.FORBIDDEN).json({ ok: false, mensaje: 'No se ha podido realizar la operación' });
            });

    }

}
