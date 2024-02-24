import { CommandBus } from './kernel/bus/command/CommandBus';
import { BusFactory } from './kernel/bus/BusFactory';
import { Command } from './kernel/bus/command/Command';
import { CreateReservationService } from './application/services/CreateReservationService';
import { CreateReservationCommand } from './application/ports/in/CreateReservationCommand';
import { ReservationRepository } from './adapters/out/ReservationRepository';
import { DefaultEventDispatcher } from './kernel/event/DefaultEventDispatcher';
import { ReservationController } from './adapters/in/ReservationController';
import { Creneau } from './domain/reservation/Creneau';
import { Formule } from './domain/reservation/Formule';
import { randomUUID } from 'crypto';
import { CentreSportif } from './domain/centre-sportif/CentreSportif';
import { CentreSportifId } from './domain/centre-sportif/CentreSportifId';
import { Activite } from './domain/centre-sportif/Activite';
import { Entreprise } from './domain/client/Entreprise';
import { DossierClient } from './domain/client/DossierClient';
import { ClientId } from './domain/client/ClientId';
import { PaymentMethod } from './domain/client/PaymentMethod';
import { Event } from './kernel/event/Event';
import { ReservationCreatedEvent } from './application/events/ReservationCreatedEvent';
import { CreateReservationHandler } from './application/services/CreateReservationHandler';
import { CreateReservationPort } from './application/ports/out/CreateReservationPort';

export class App {
	private static commandeBus: CommandBus<Command, void>;
	private static eventDispatcher: DefaultEventDispatcher<Event>;

	static start() {
		console.log('🚀 App started.');
		this.registerCommandsAndQueriesAndEventHandlers();
	}

	static registerCommandsAndQueriesAndEventHandlers() {
		this.registerCommands();
		this.registerQueries();

		const entreprise = new Entreprise(
			ClientId.of(randomUUID()),
			DossierClient.of('', '', '', '', PaymentMethod.BANK_CARD, '', []),
		);

		const reservationController = new ReservationController(this.commandeBus);
		const creneau = Creneau.of(new Date(), new Date(), new Date('24-02-2024'));
		const fromule = Formule.of(randomUUID(), '', '', 100);
		const centre = new CentreSportif(CentreSportifId.of(randomUUID()), '', '', '', '', '', '');
		const activity = new Activite(randomUUID(), '', '');
		reservationController.create(creneau, fromule, centre, activity, entreprise.clientId, []);
	}

	static registerCommands() {
		this.eventDispatcher = DefaultEventDispatcher.create();
		this.eventDispatcher.register(ReservationCreatedEvent, new CreateReservationHandler());

		this.commandeBus = BusFactory.defaultCommandBus();
		this.commandeBus.register(
			CreateReservationCommand,
			new CreateReservationService(new ReservationRepository(), this.eventDispatcher),
		);
	}

	static registerQueries() {
		// REGISTER TOUTES LES QUERIES
	}
}