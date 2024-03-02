import { ReservationId } from '../../domain/reservation/ReservationId';
import { Event } from '../../kernel/event/Event';
import { Reservation } from '../../domain/reservation/Reservation';
export class ReservationDeletedEvent implements Event {
	private readonly _reservationId: ReservationId;

	constructor(reservationId: ReservationId) {
		this._reservationId = reservationId;
	}

	get reservationId(): ReservationId {
		return this._reservationId;
	}

	name(): string {
		return this.constructor.name;
	}
}
