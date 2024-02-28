import { EventHandler } from '../../kernel/event/EventHandler';
import { ReservationCreatedEvent } from '../events/ReservationCreatedEvent';
import { EventDispatcher } from '../../kernel/event/EventDispatcher';
import { CreatePaymentEvent } from '../events/CreatePaymentEvent';

export class CreateReservationHandler implements EventHandler<ReservationCreatedEvent> {
	private eventDispatcher: EventDispatcher<CreatePaymentEvent>;

	constructor(eventDispatcher: EventDispatcher<CreatePaymentEvent>) {
		this.eventDispatcher = eventDispatcher;
	}

	handle(event: ReservationCreatedEvent): void {
		console.log(`reservation ${event.reservation.reservationId.id} saved`);

		console.log('you wille be sent to payment ....');

		this.eventDispatcher.dispatch(new CreatePaymentEvent(event.reservation.client, event.reservation));
	}
}
