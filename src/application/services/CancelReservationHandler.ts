import { EventHandler } from '../../kernel/event/EventHandler';
import { ReservationDeletedEvent } from '../events/ReservationDeletedEvent';
import { EmailNotifier } from '../../adapters/out/EmailNotifier';

export class CancelReservationHandler implements EventHandler<ReservationDeletedEvent> {
	private readonly notifierService: EmailNotifier = new EmailNotifier();
	constructor() {}

	handle(event: ReservationDeletedEvent): void {
		this.notifierService.notify(`reservation ${event.reservationId.id} cancelled `);
	}
}
