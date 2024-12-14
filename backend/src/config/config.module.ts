import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './database.config';

@Module({
    imports: [
        NestConfigModule.forRoot({
            isGlobal: true, // Rendre global
            envFilePath: '.env', // Spécifiez le chemin du fichier .env
        }),
    ],
    providers: [DatabaseConfig], // Fournir DatabaseConfig
    exports: [DatabaseConfig],   // Exporter DatabaseConfig pour d'autres modules
})
export class ConfigModule { }
