import { Invoice } from '../../application/ports/out/Invoice';
import { Facture } from '../../domain/reservation/Facture';

export class InvoiceService implements Invoice {
	sendInvoice(invoice: Facture) {
		console.log(` invoice sent ${invoice.id} `);
	}
}
