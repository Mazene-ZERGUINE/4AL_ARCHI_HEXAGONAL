import { EventDispatcher } from './EventDispatcher';
import { EventHandler } from './EventHandler';
import { Class } from '../Class';
import { Event } from './Event';

export class DefaultEventDispatcher<TEvent extends Event> implements EventDispatcher<TEvent> {
	private readonly registry: Map<Class<TEvent>, EventHandler<TEvent>>;

	constructor(registry: Map<Class<TEvent>, EventHandler<TEvent>>) {
		this.registry = registry;
	}

	static create(): DefaultEventDispatcher<Event> {
		return new DefaultEventDispatcher<Event>(new Map());
	}

	dispatch(event: TEvent): void {
		const eventHandler = this.registry.get(event.constructor as Class<TEvent>);
		if (!eventHandler) {
			throw new Error(`No handler registered for ${event.constructor.name}`);
		}

		eventHandler.handle(event);
	}

	register(eventClass: Class<TEvent>, eventHandler: EventHandler<TEvent>): void {
		if (!this.registry.has(eventClass)) {
			this.registry.set(eventClass, eventHandler);
		}
	}
}
