import { Injectable } from '@nestjs/common';
import { EventRepositoryPort } from '../domain/repositories/event-repository.interface';
import { Event } from '../domain/entities/event.entity';

@Injectable()
export class EventsUseCases {
    constructor(private readonly eventRepository: EventRepositoryPort) { }

    async createEvent(data: Partial<Event>): Promise<Event> {
        const newEvent = new Event(
            Math.random().toString(), // Remplacez par un générateur UUID dans un vrai projet
            data.title,
            data.startDate,
            data.endDate,
            data.type,
            data.participants || [],
        );
        return this.eventRepository.save(newEvent);
    }

    async findAllEvents(): Promise<Event[]> {
        return this.eventRepository.findAll();
    }

    async findEventById(id: string): Promise<Event | null> {
        return this.eventRepository.findById(id);
    }

    async updateEvent(id: string, data: Partial<Event>): Promise<Event | null> {
        const existingEvent = await this.eventRepository.findById(id);
        if (!existingEvent) {
            return null;
        }

        const updatedEvent = { ...existingEvent, ...data };
        return this.eventRepository.save(updatedEvent);
    }

    async deleteEvent(id: string): Promise<void> {
        await this.eventRepository.deleteById(id);
    }
}
