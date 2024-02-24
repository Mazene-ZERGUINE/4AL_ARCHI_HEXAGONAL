import { EventDispatcher } from './EventDispatcher';
import { EventHandler } from './EventHandler';
import { Class } from '../Class';
import { Event } from './Event';

export class DefaultEventDispatcher<TEvent extends Event> implements EventDispatcher<TEvent> {
	private readonly registry: Map<string, EventHandler<TEvent>>;

	private constructor(registry: Map<string, EventHandler<TEvent>>) {
		this.registry = registry;
	}

	static create(): DefaultEventDispatcher<Event> {
		return new DefaultEventDispatcher<Event>(new Map());
	}

	dispatch(event: TEvent) {
		// const eventHandler = this.registry.get(event.constructor as Class<Event>);
		const eventHandler = this.registry.get(event.name());
		if (!eventHandler) {
			throw new Error(`No handler registered for ${event.name()}`);
		}

		return eventHandler.handle(event);
	}

	// Class<TEvent>
	register(eventClass: string, eventHandler: EventHandler<TEvent>): void {
		if (!this.registry.has(eventClass)) {
			this.registry.set(eventClass, eventHandler);
		}
	}
}
