import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConfig {
    constructor(private readonly configService: ConfigService) { }

    get typeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DATABASE_HOST'),
            port: this.configService.get<number>('DATABASE_PORT'),
            username: this.configService.get<string>('DATABASE_USER'),
            password: this.configService.get<string>('DATABASE_PASSWORD'),
            database: this.configService.get<string>('DATABASE_NAME'),
            autoLoadEntities: true,
            synchronize: true, // Développez uniquement. Désactivez en production.
        };
    }
}
