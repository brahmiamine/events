import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { DatabaseConfig } from './config/database.config';
import { EventsModule } from './modules/events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule, // Importez ConfigModule
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Assurez-vous que ConfigModule est bien importé ici
      inject: [DatabaseConfig], // Injectez DatabaseConfig dans useFactory
      useFactory: (dbConfig: DatabaseConfig) => dbConfig.typeOrmConfig, // Utilisez dbConfig pour configurer TypeORM
    }),
    EventsModule, // Autres modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
