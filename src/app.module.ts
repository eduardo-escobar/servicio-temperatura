import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { CiudadController } from './ciudad/ciudad.controller';
import { CiudadlatLongService } from './util/ciudadlat-long/ciudadlat-long.service';
import { ConfigModule } from '@nestjs/config';
import { CiudadService } from './ciudad/ciudad.service';
import { CiudadGateway } from './ciudad/ciudad.gateway';

@Module({
  imports: [ConfigModule.forRoot(), RedisCacheModule,EasyconfigModule.register({path: './config/.env'})],
  controllers: [CiudadController],
  providers: [CiudadlatLongService, CiudadService,CiudadGateway],
})
export class AppModule { }
