import { Event } from '../entities/event.entity';

export interface EventRepositoryPort {
    save(event: Event): Promise<Event>;
    findById(id: string): Promise<Event | null>;
    findAll(): Promise<Event[]>;
    deleteById(id: string): Promise<void>;
}
