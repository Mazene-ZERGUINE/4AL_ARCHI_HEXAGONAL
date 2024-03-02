import { CreateReservationPort } from '../../application/ports/out/CreateReservationPort';
import { ReservationId } from '../../domain/reservation/ReservationId';
import { Reservation } from '../../domain/reservation/Reservation';
import { GetReservationPort } from '../../application/ports/out/GetReservationPort';
import { ClientId } from '../../domain/client/ClientId';
import { DeleteReservationPort } from '../../application/ports/out/DeleteReservationPort';

export class ReservationRepository implements CreateReservationPort, GetReservationPort, DeleteReservationPort {
	private reservationList: Map<ReservationId, Reservation>;

	constructor() {
		this.reservationList = new Map<ReservationId, Reservation>();
	}

	save(reservation: Reservation): void {
		this.reservationList.set(reservation.reservationId, reservation);
	}

	getAll(): Map<ReservationId, Reservation> {
		return this.reservationList;
	}

	getByClient(clientId: ClientId): Reservation[] {
		const clientsReservations: Reservation[] = [];

		this.reservationList.forEach((reservation, id) => {
			if (reservation.client === clientId) {
				clientsReservations.push(reservation);
			}
		});

		return clientsReservations;
	}

	getById(reservationId: ReservationId): Reservation | undefined {
		return this.reservationList.get(reservationId);
	}

	delete(reservationId: ReservationId) {
		this.reservationList.delete(reservationId);
	}
}
