import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { EventsUseCases } from '../application/events.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { UpdateEventDto } from './dtos/update-event.dto';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsUseCases: EventsUseCases) { }

    @Post()
    create(@Body() createEventDto: CreateEventDto) {
        return this.eventsUseCases.createEvent(createEventDto);
    }

    @Get()
    findAll() {
        return this.eventsUseCases.findAllEvents();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventsUseCases.findEventById(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
        return this.eventsUseCases.updateEvent(id, updateEventDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.eventsUseCases.deleteEvent(id);
    }
}
