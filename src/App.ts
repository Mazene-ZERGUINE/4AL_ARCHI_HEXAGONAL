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

export class App {
	private static commandBus: CommandBus<Command, void>;
	private static eventDispatcher: DefaultEventDispatcher<Event>;
	private static reservationRepository: ReservationRepository;

	static start() {
		console.log('🚀 App started.');
		this.registerEventHandlersAndCommandsAndQueries();
		this.test();
	}

	static registerEventHandlersAndCommandsAndQueries() {
		this.reservationRepository = new ReservationRepository();

		this.registerEventHandlers();
		this.registerCommands();
	}

	static registerCommands() {
		this.commandBus = BusFactory.defaultCommandBus();

		this.commandBus.register(
			CreateReservationCommand,
			new CreateReservationService(this.reservationRepository, this.eventDispatcher),
		);
	}

	static registerEventHandlers() {
		this.eventDispatcher = DefaultEventDispatcher.create();

		this.eventDispatcher.register(ReservationCreatedEvent, new CreateReservationHandler());
	}

	static test() {
		const entreprise = new Entreprise(
			ClientId.of(randomUUID()),
			DossierClient.of('', '', '', '', PaymentMethod.BANK_CARD, '', []),
		);

		const reservationController = new ReservationController(this.commandBus);
		const creneau = Creneau.of(new Date(), new Date(), new Date('24-02-2024'));
		const fromule = Formule.of(randomUUID(), '', '', 100);
		const centre = new CentreSportif(CentreSportifId.of(randomUUID()), '', '', '', '', '', '');
		const activity = new Activite(randomUUID(), '', '');
		reservationController.create(creneau, fromule, centre, activity, entreprise.clientId, []);

		const reservations = this.reservationRepository.getAll();

		for (let [key, value] of reservations.entries()) {
			console.log(`reservation [ ${key.id} : ${value} ]`);
		}
	}
}
