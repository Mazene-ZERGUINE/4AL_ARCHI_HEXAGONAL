import { UUID } from 'crypto';
import { ClientId } from '../client/ClientId';

export class Facture {
	private readonly _id: UUID;

	private _price: number;

	private _client: ClientId;

	private _date: Date;

	private constructor(id: UUID, price: number, client: ClientId, date: Date) {
		this._id = id;
		this._price = price;
		this._client = client;
		this._date = date;
	}

	static of(id: UUID, price: number, client: ClientId, date: Date) {
		return new Facture(id, price, client, date);
	}

	get id(): UUID {
		return this._id;
	}

	get price(): number {
		return this._price;
	}

	get client(): ClientId {
		return this._client;
	}

	get date(): Date {
		return this._date;
	}
	toString(): string {
		const dateStr = this._date.toISOString().split('T')[0];
		const clientIdStr = this._client.id;
		const priceStr = `$${this._price.toFixed(2)}`;

		return `Invoice ID: ${this._id.toString()}, Client ID: ${clientIdStr}, Date: ${dateStr}, Price: ${priceStr}`;
	}
}
