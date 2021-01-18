import { Injectable } from '@nestjs/common';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';
import * as redis from 'async-redis';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import * as moment from 'moment'
import 'moment/locale/es'

/**
 * Servicio para logica de peticion a api forescat
 */
@Injectable()
export class CiudadService {

    keyCiudades = ['CL', 'CH', 'NZ', 'AU', 'UK', 'USA'];

    constructor(private redisCahche: RedisCacheService) { }

    /**
     * Obtiene los datos de las ciudades
     */
    async ObtenerDatoDeCiudadades() {
        try {
            return await new Promise<any>((resolve, reject) => {
                const ciudades = [];
                const procesoParaObtenerValoresCiudades = this.keyCiudades.map(k => {
                    return this.requestToApi(k).then(c => {
                        let cd = c.data;
                        const hora = this.getFechaYHora(cd.dt, cd.timezone);
                        const temperatura = this.getTemperatura(cd.main.temp);

                        const asd = {
                            key : k,
                            nombre: cd.name,
                            long: cd.coord.lon,
                            lat: cd.coord.lat,
                            hora,
                            temperatura
                        }
                        ciudades.push(asd);

                    });
                });                 
                
                Promise.all(procesoParaObtenerValoresCiudades).then(data=>{
                   resolve(ciudades.sort());
                });
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    /**
     * Realiza la logica de peticion a forescat con 10% de error
     * @param key key de ciudad 
     */
    requestToApi = (key: any) => {
        let esExitoso = false;
        //Conexion de redis para guardar en hash api.errors
        var dbConnection = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);

        while (!esExitoso) {
            try {
                if (Math.random() < 0.1) {
                    throw new Error('How unfortunate! The API Request Failed');
                } else {
                    esExitoso = true;
                }

            } catch (error) {
                dbConnection.hmset("api.errors", "timestamp", `${Date.now().toString()}`, "error", `${error}`);
                esExitoso = false;
            }
        }

        //Obtengo la ciudad de redis para realizar el request al servicio

        return this.redisCahche.get(key).then(c => {
            var ciudad = JSON.parse(c);

            //Realizo la solicitud al servicio de forescat
            const url = `${process.env.URL_FORESCAT_API}?lat=${ciudad.lat}&lon=${ciudad.long}&appid=${process.env.API_KEY}`;

            //Se observa que el servicio no esta retornando valores actualizados en cada peticion sino 
            //que lo realiza despues de un determinado tiempo, al parecer queda algun cache de la solicitud
            return axios.get(url);
        });
    }

    /**
     * Obtener la hora
     * @param dt epoch en segundos
     * @param tmz epoch a sumar al epoch dt para saber la hora 
     */
    getFechaYHora = (dt: any, tmz: any) => {
        moment.locale('es');
        var momentDate = moment.unix(dt + tmz).utc().format('h:mm a');
        
        return momentDate;
    }

    /**
     * Obtiene la temperatura en celcius
     * @param kl temperatura en kelvin 
     */
    getTemperatura = (kl: any) => {

        return Math.round(kl - 273.15);
    }


}
