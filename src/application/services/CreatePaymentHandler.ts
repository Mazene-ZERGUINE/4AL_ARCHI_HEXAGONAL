import { EventHandler } from '../../kernel/event/EventHandler';
import { CreatePaymentEvent } from '../events/CreatePaymentEvent';

export class CreatePaymentHandler implements EventHandler<CreatePaymentEvent> {
	handle(event: CreatePaymentEvent) {
		// todo: notifier + facture //
		console.log(`voici ta facture de merde ${event.reservation.facture}`);
		console.log(`reservation confirmer ${event.reservation}`);
	}
}
