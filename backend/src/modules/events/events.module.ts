import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './domain/entities/event.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Event])], // Chargement des entités pour TypeORM
})
export class EventsModule { }
