import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from '../../domain/entities/event.entity';
import { EventRepositoryPort } from '../../domain/repositories/event-repository.interface';

@Injectable()
export class EventRepository implements EventRepositoryPort {
    constructor(
        @InjectRepository(Event)
        private readonly repo: Repository<Event>,
    ) { }

    async save(event: Event): Promise<Event> {
        return this.repo.save(event);
    }

    async findById(id: string): Promise<Event | null> {
        return this.repo.findOneBy({ id });
    }

    async findAll(): Promise<Event[]> {
        return this.repo.find();
    }

    async deleteById(id: string): Promise<void> {
        await this.repo.delete(id);
    }
}
