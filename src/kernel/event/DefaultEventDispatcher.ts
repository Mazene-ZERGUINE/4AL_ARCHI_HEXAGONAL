import { EventDispatcher } from './EventDispatcher';
import { EventHandler } from './EventHandler';
import { Class } from '../Class';
import { Event } from './Event';

export class DefaultEventDispatcher<TEvent extends Event> implements EventDispatcher<TEvent> {
	private readonly registry: Map<new (...args: any[]) => TEvent, EventHandler<TEvent>>;

	constructor() {
		this.registry = new Map();
	}

	static create(): DefaultEventDispatcher<Event> {
		return new DefaultEventDispatcher<Event>();
	}
	dispatch(event: TEvent) {
		const eventHandler = this.registry.get(event.constructor as new (...args: any[]) => TEvent);
		if (!eventHandler) {
			throw new Error(`No handler registered for ${event.constructor.name}`);
		}

		return eventHandler.handle(event);
	}

	// Class<TEvent>
	register(eventClass: new (...args: any[]) => TEvent, eventHandler: EventHandler<TEvent>): void {
		if (!this.registry.has(eventClass)) {
			this.registry.set(eventClass, eventHandler);
		}
	}
}
