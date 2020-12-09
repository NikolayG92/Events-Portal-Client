import { EventTicketsModel } from './event-tickets-model';

export interface EventModel{
    id: string;
    ticketsAvailable: number;
    description: string;
    startDate: Date;
    imageUrl: File;
    name: string;
    boughtTickets: number;
    users: EventTicketsModel[];
}