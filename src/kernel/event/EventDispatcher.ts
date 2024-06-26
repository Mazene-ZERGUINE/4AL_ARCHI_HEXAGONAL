import { Event } from './Event';
import { Class } from '../Class';
import { EventHandler } from './EventHandler';

export interface EventDispatcher<TEvent extends Event> {
	dispatch(event: TEvent): void;
	register(eventClass: Class<TEvent>, eventHandler: EventHandler<TEvent>): void;
}
