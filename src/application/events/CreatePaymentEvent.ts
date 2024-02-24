import { Event } from '../../kernel/event/Event';
import { ClientId } from '../../domain/client/ClientId';
import { Reservation } from '../../domain/reservation/Reservation';

export class CreatePaymentEvent implements Event {
	private _client: ClientId;
	private _reservation: Reservation;

	constructor(client: ClientId, reservation: Reservation) {
		this._client = client;
		this._reservation = reservation;
	}

	get client(): ClientId {
		return this._client;
	}

	get reservation(): Reservation {
		return this._reservation;
	}

	name(): string {
		return this.constructor.name;
	}
}
