import { Facture } from '../../../domain/reservation/Facture';

export interface Invoice {
	sendInvoice(invoice: Facture): void;
}
