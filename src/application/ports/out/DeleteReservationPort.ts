import { ReservationId } from '../../../domain/reservation/ReservationId';

export interface DeleteReservationPort {
	delete(reservationId: ReservationId): void;
}
