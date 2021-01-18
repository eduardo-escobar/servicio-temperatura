import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './redis-cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';

/**
 * Modulo para redis y su conexion 
 */
@Module({
    imports: [
        CacheModule.registerAsync({
            imports: [ConfigModule.forRoot()],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                store: redisStore,
                host: configService.get('REDIS_HOST'),// Especifica el host de redis
                port: configService.get('REDIS_PORT'), // Puerto de redis
                ttl: configService.get('CACHE_TTL'), // Especifica la cantidad de tiempo en segundos antes de que se invalide un valor.
                max: configService.get('MAX_ITEM_IN_CACHE') //  Especifica el número máximo de elementos que deben mantenerse en la caché.
            })
        })
    ],
    providers: [RedisCacheService],
    exports: [RedisCacheService]
})
export class RedisCacheModule {}
