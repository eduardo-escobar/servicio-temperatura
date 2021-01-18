import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CiudadGateway } from './ciudad/ciudad.gateway';
import { CiudadService } from './ciudad/ciudad.service';
import { CiudadlatLongService } from './util/ciudadlat-long/ciudadlat-long.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1')
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  const ciudadlatLongService = app.get(CiudadlatLongService);
  const ciudadService = app.get(CiudadService);
  const ciudadGateway = app.get(CiudadGateway);
  //Guardar  latitudes y longitudes de cada ciudad en Redis al momento de iniciar la aplicación 
  await ciudadlatLongService.GuardarLatitudLongitud();

  //Ejecuta cada 10 seg la actualizacion de las ciudades para el front
  setInterval(async ()=>{
    const ciudades = await ciudadService.ObtenerDatoDeCiudadades();
    ciudadGateway.onCiudad(ciudades);
  },30000);
}
bootstrap();
