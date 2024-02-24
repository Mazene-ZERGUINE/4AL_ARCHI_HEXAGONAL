import { EventHandler } from '../../kernel/event/EventHandler';
import { ReservationCreatedEvent } from '../events/ReservationCreatedEvent';
import { EventDispatcher } from '../../kernel/event/EventDispatcher';
import { CreatePaymentEvent } from '../events/CreatePaymentEvent';

export class CreateReservationHandler implements EventHandler<ReservationCreatedEvent> {
	constructor() {}

	handle(event: ReservationCreatedEvent): void {
		console.log(`reservation ${event.reservation.reservationId.id} saved`);

		console.log('you wille be sent to payement ....');
	}
}
