import { UserModel } from '../user/user-model';

export interface EventTicketsModel {
    
    user: UserModel;
    boughtTickets: number;
    eventId: string;
}