import { CommandBus } from '../../kernel/bus/command/CommandBus';
import { Command } from '../../kernel/bus/command/Command';
import { Creneau } from '../../domain/reservation/Creneau';
import { Service } from '../../domain/reservation/Service';
import { Formule } from '../../domain/reservation/Formule';
import { CentreSportif } from '../../domain/centre-sportif/CentreSportif';
import { Activite } from '../../domain/centre-sportif/Activite';
import { UUID } from 'crypto';
import { CreateReservationCommand } from '../../application/ports/in/CreateReservationCommand';
import { ClientId } from '../../domain/client/ClientId';

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
		this.commandBus.post(new CreateReservationCommand(creneau, formule, centreSportif, activite, client, services));
	}
}
