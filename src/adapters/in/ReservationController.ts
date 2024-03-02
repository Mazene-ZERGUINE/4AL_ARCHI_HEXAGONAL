import { CommandBus } from '../../kernel/bus/command/CommandBus';
import { Command } from '../../kernel/bus/command/Command';
import { Creneau } from '../../domain/reservation/Creneau';
import { Service } from '../../domain/reservation/Service';
import { Formule } from '../../domain/reservation/Formule';
import { CentreSportif } from '../../domain/centre-sportif/CentreSportif';
import { Activite } from '../../domain/centre-sportif/Activite';
import { UUID } from 'crypto';
import { CreateReservationCommend } from '../../application/ports/in/CreateReservationCommend';
import { ClientId } from '../../domain/client/ClientId';
import { ReservationId } from '../../domain/reservation/ReservationId';
import { CancelReservationCommand } from '../../application/ports/in/CancelReservationCommande';

export class ReservationController {
	private readonly commandBus: CommandBus<Command, void>;

	constructor(commandBus: CommandBus<Command, void>) {
		this.commandBus = commandBus;
	}

	create(
		creneau: Creneau,
		formule: Formule,
		centreSportif: CentreSportif,
		activite: Activite,
		client: ClientId,
		services: Array<Service> = [],
	): void {
		this.commandBus.post(new CreateReservationCommend(creneau, formule, centreSportif, activite, client, services));
	}

	cancel(reservationId: ReservationId) {
		this.commandBus.post(new CancelReservationCommand(reservationId));
	}
}
