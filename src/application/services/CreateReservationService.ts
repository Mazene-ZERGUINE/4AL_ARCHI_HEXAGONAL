import { CommandHandler } from '../../kernel/bus/command/CommandHandler';
import { CreateReservationCommend } from '../ports/in/CreateReservationCommend';
import { Reservation } from '../../domain/reservation/Reservation';
import { randomUUID } from 'crypto';
import { ReservationStatus } from '../../domain/reservation/ReservationStatus';
import { Facture } from '../../domain/reservation/Facture';
import { ReservationId } from '../../domain/reservation/ReservationId';
import { CreateReservationPort } from '../ports/out/CreateReservationPort';
import { EventDispatcher } from '../../kernel/event/EventDispatcher';
import { ReservationCreatedEvent } from '../events/ReservationCreatedEvent';
import { ReservationException } from '../../domain/reservation/ReservationException';

export class CreateReservationService implements CommandHandler<CreateReservationCommend, Reservation> {
	private createReservationPort: CreateReservationPort;

	private eventDispatcher: EventDispatcher<ReservationCreatedEvent>;

	constructor(createReservationPort: CreateReservationPort, eventDispatcher: EventDispatcher<ReservationCreatedEvent>) {
		this.createReservationPort = createReservationPort;
		this.eventDispatcher = eventDispatcher;
	}

	handle(command: CreateReservationCommend): Reservation {
		const randomId = randomUUID();
		const reservationId = ReservationId.of(randomId);
		const reservationStatus = ReservationStatus.CONFIRMED;
		const facture = Facture.of(randomUUID(), command.formule.price, command.client, command.creneau.date);

		if (!command.creneau.isAvailable) {
			throw new ReservationException('crenau non disponible');
		}

		const reservation = new Reservation(
			reservationId,
			reservationStatus,
			command.creneau,
			command.formule,
			facture,
			command.centreSportif,
			command.activite,
			command.client,
			command.services,
		);

		this.createReservationPort.save(reservation);

		this.eventDispatcher.dispatch(new ReservationCreatedEvent(reservation));

		return reservation;
	}
}
