<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalacion
Intalacion de paquetes 

```bash
$ npm install
```

## Correr la aplicacion

```bash
# desarrollo
$ npm run start

# desarrollo pero reniciando el build cada vez que hay una modificacion 
$ npm run start:dev

# producccion
$ npm run start:prod
```

## Test

```bash
# pruebas unitarias
$ npm run test

#pruebas  e2e 
$ npm run test:e2e

```

## Url de api local de servicio

http://localhost:3000/api/v1/ciudad

## Archivo .env
Se define el  archivo .env en la carpeta config para tener la url de conexiones y apis que ocupa el sistema 
Alli esta especificado la url de redis, para el desarrollo del proyecto se ocupo ambiente local

## Respuesta ejemplo exitosa del servicio 

```bash
{
    "ok": true,
    "mensaje": {
        "ciudades": [
            {
                "key": "CL",
                "nombre": "Santiago",
                "long": -70.6483,
                "lat": -33.4569,
                "hora": "8:52 pm",
                "temperatura": 23
            },
            {
                "key": "CH",
                "nombre": "Zurich",
                "long": 8.55,
                "lat": 47.3667,
                "hora": "12:52 am",
                "temperatura": 1
            },
            {
                "key": "NZ",
                "nombre": "Auckland",
                "long": 174.7635,
                "lat": -36.8485,
                "hora": "12:52 pm",
                "temperatura": 22
            },
            {
                "key": "USA",
                "nombre": "Georgia",
                "long": -83.5,
                "lat": 32.75,
                "hora": "6:52 pm",
                "temperatura": 6
            },
            {
                "key": "AU",
                "nombre": "Sydney",
                "long": 151.2073,
                "lat": -33.8679,
                "hora": "10:49 am",
                "temperatura": 28
            },
            {
                "key": "UK",
                "nombre": "City of London",
                "long": -0.0918,
                "lat": 51.5128,
                "hora": "11:49 pm",
                "temperatura": 3
            }
        ]
    }
}
```


