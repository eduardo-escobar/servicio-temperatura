import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

/**
 * Servicio para trabajar con redis 
 */
@Injectable()
export class RedisCacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

    /**
     * Obtiene el valor de la key buscada 
     * @param key key a buscar
     */
    async get(key): Promise<any> {
        return await this.cache.get(key);
    }

    /**
     * Almacena la key con su respectivo valor
     * @param key key del registro
     * @param value valor del registro
     */
    async set(key, value) {
        await this.cache.set(key, value, 1000);
    }

    /**
     * Reiniciar cache de redis
     */
    async reset() {
        await this.cache.reset();
    }

    /**
     * Eliminar segun la key entregada
     * @param key key del registro
     */
    async del(key) {
        await this.cache.del(key);
    }
}