import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RedisCacheService } from 'src/redis-cache/redis-cache.service';
import { CiudadLatLong } from './ciudadlatLong';

@Injectable()
export class CiudadlatLongService {

     constructor(private redisCache : RedisCacheService){} 

     /**
      * Ciudades con su respectiva lat y long
      */
    ciudadesLatLong: CiudadLatLong[] = [
        {
            id: "CL",
            nombreCiudad: "Santiago",
            lat: -33.45694,
            long: -70.64827
        },
        {
            id: "CH",
            nombreCiudad: "Zurich",
            lat: 47.36667,
            long: 8.55
        },
        {
            id: "NZ",
            nombreCiudad: "Auckland",
            lat: -36.84853,
            long: 174.76349
        },
        {
            id: "AU",
            nombreCiudad: "Sydney",
            lat: -33.86785,
            long: 151.20732
        },
        {
            id: "UK",
            nombreCiudad: "Londres",
            lat: 51.51279,
            long: -0.09184
        },
        {
            id: "USA",
            nombreCiudad: "Georgia",
            lat: 32.750,
            long: -83.500
        }
    ];

    /**
     * Guarda  latitudes y longitudes de cada ciudad en Redis al momento de iniciar la aplicación 
     */
    async GuardarLatitudLongitud(){
        this.ciudadesLatLong.map(cd => {    
           this.redisCache.set(cd.id,JSON.stringify(cd));
        })    
    }

}
