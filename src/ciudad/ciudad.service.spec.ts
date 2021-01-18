import { CiudadService } from './ciudad.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CiudadService', () => {
  let ciudadService: CiudadService;
  let app: TestingModule;

  beforeAll(async () => {

    app = await Test.createTestingModule({
      providers: [CiudadService],
    }).compile();

    ciudadService = app.get<CiudadService>(CiudadService);
  });

  describe('Obtener un array de ciudades', () => {
    it('Deberia retornar un arreglo de ciudades', async () => {
      const expectedResponse = [{
        key: "CH",
        nombre: "Zurich",
        long: 8.55,
        lat: 47.3667,
        hora: "12:52 am",
        temperatura: 1
      }];

      const ciudades = await ciudadService.ObtenerDatoDeCiudadades();
      expect(ciudades).toStrictEqual(expectedResponse);
    });
  });
});
