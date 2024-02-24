import { Event } from '../../kernel/event/Event';
import { Reservation } from '../../domain/reservation/Reservation';
import { ReservationId } from '../../domain/reservation/ReservationId';

export class ReservationCreatedEvent implements Event {
	private readonly _reservation: Reservation;

	constructor(reservation: Reservation) {
		this._reservation = reservation;
	}

	name(): string {
		return this.constructor.name;
	}

	get reservation(): Reservation {
		return this._reservation;
	}
}
