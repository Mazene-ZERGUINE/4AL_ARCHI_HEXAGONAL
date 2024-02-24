import { CreateReservationPort } from '../../application/ports/out/CreateReservationPort';
import { ReservationId } from '../../domain/reservation/ReservationId';
import { Reservation } from '../../domain/reservation/Reservation';

export class ReservationRepository implements CreateReservationPort {
	private reservationList: Map<ReservationId, Reservation>;

	constructor() {
		this.reservationList = new Map<ReservationId, Reservation>();
	}

	save(reservation: Reservation): void {
		this.reservationList.set(reservation.reservationId, reservation);
	}
}
