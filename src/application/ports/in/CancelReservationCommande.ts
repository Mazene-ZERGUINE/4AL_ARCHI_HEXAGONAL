import { ReservationId } from '../../../domain/reservation/ReservationId';
import { Command } from '../../../kernel/bus/command/Command';

export class CancelReservationCommand implements Command {
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
