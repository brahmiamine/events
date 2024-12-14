export class CreateEventDto {
    title: string;
    startDate: string; // ISO format
    endDate: string;
    type: string;
    participants: string[];
}
