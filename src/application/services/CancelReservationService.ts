import { CommandHandler } from '../../kernel/bus/command/CommandHandler';
import { CancelReservationCommand } from '../ports/in/CancelReservationCommande';
import { Reservation } from '../../domain/reservation/Reservation';
import { EventDispatcher } from '../../kernel/event/EventDispatcher';
import { ReservationCreatedEvent } from '../events/ReservationCreatedEvent';
import { GetReservationPort } from '../ports/out/GetReservationPort';
import { ReservationException } from '../../domain/reservation/ReservationException';
import { DeleteReservationPort } from '../ports/out/DeleteReservationPort';
import { ReservationDeletedEvent } from '../events/ReservationDeletedEvent';

export class CancelReservationService implements CommandHandler<CancelReservationCommand, Reservation> {
	private eventDispatcher: EventDispatcher<ReservationDeletedEvent>;

	private readonly getReservationPort: GetReservationPort;

	private readonly deleteReservationPort: DeleteReservationPort;
	constructor(
		eventDispatcher: EventDispatcher<ReservationDeletedEvent>,
		getReservationPort: GetReservationPort,
		deleteReservationPort: DeleteReservationPort,
	) {
		this.eventDispatcher = eventDispatcher;
		this.getReservationPort = getReservationPort;
		this.deleteReservationPort = deleteReservationPort;
	}
	handle(command: CancelReservationCommand): Reservation {
		const exist = this.getReservationPort.getById(command.reservationId);

		if (!exist) {
			throw new ReservationException('reservation not found');
		}

		const startTime = exist.creneau.startTime;
		const now = new Date();

		const differenceInMs = now.getTime() - startTime.getTime();

		const differenceInHours = differenceInMs / (1000 * 60 * 60);

		//if (differenceInHours < 2) {
		//throw new ReservationException("reservation can't be cancelled");
		//}

		exist.creneau.isAvailable = true;
		this.deleteReservationPort.delete(command.reservationId);

		this.eventDispatcher.dispatch(new ReservationDeletedEvent(command.reservationId));

		return exist;
	}
}
