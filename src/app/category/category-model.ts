import { EventModel } from '../event/event-model';

export interface CategoryModel {
    
    id: string;
    name: string;
    events: EventModel[];
    imageUrl: string;
}