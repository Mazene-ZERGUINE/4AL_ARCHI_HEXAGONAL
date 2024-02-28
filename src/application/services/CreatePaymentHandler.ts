import { EventHandler } from '../../kernel/event/EventHandler';
import { CreatePaymentEvent } from '../events/CreatePaymentEvent';
import { EmailNotifier } from '../../adapters/out/EmailNotifier';
import { InvoiceService } from '../../adapters/out/InvoiceService';

export class CreatePaymentHandler implements EventHandler<CreatePaymentEvent> {
	private emailNotifier = new EmailNotifier();

	private invoiceService = new InvoiceService();

	handle(event: CreatePaymentEvent) {
		this.emailNotifier.notify(event.client.id);

		this.invoiceService.sendInvoice(event.reservation.facture);
	}
}
