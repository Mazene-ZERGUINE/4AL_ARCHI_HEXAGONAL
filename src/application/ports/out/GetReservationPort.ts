import { Reservation } from '../../../domain/reservation/Reservation';
import { ReservationId } from '../../../domain/reservation/ReservationId';
import { ClientId } from '../../../domain/client/ClientId';

export interface GetReservationPort {
	getAll(): Map<ReservationId, Reservation>;

	getByClient(clientId: ClientId): Reservation[];

	getById(reservationId: ReservationId): Reservation | undefined;
}
