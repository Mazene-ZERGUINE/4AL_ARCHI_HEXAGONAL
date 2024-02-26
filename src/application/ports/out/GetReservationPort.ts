import { Reservation } from '../../../domain/reservation/Reservation';
import { ReservationId } from '../../../domain/reservation/ReservationId';

export interface GetReservationPort {
	getAll(): Map<ReservationId, Reservation>;
}
