import { Reservation } from '../../../domain/reservation/Reservation';

export interface CreateReservationPort {
	save(reservation: Reservation): void;
}
