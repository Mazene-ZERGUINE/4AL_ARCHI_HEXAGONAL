import { CommandBus } from './kernel/bus/command/CommandBus';
import { BusFactory } from './kernel/bus/BusFactory';
import { Command } from './kernel/bus/command/Command';
import { CreateReservationService } from './application/services/CreateReservationService';
import { CreateReservationCommend } from './application/ports/in/CreateReservationCommend';
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
import { CreatePaymentEvent } from './application/events/CreatePaymentEvent';
import { CreatePaymentHandler } from './application/services/CreatePaymentHandler';
import { ReservationDeletedEvent } from './application/events/ReservationDeletedEvent';
import { CancelReservationHandler } from './application/services/CancelReservationHandler';
import { CancelReservationCommand } from './application/ports/in/CancelReservationCommande';
import { CancelReservationService } from './application/services/CancelReservationService';

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
			CreateReservationCommend,
			new CreateReservationService(this.reservationRepository, this.eventDispatcher),
		);

		this.commandBus.register(
			CancelReservationCommand,
			new CancelReservationService(this.eventDispatcher, this.reservationRepository, this.reservationRepository),
		);
	}

	static registerEventHandlers() {
		this.eventDispatcher = DefaultEventDispatcher.create();

		this.eventDispatcher.register(ReservationCreatedEvent, new CreateReservationHandler(this.eventDispatcher));
		this.eventDispatcher.register(CreatePaymentEvent, new CreatePaymentHandler());
		this.eventDispatcher.register(ReservationDeletedEvent, new CancelReservationHandler());
	}

	static test() {
		const entrepriseId = ClientId.of(randomUUID());
		const entreprise = new Entreprise(entrepriseId, DossierClient.of('', '', '', '', PaymentMethod.BANK_CARD, '', []));
		const reservationController = new ReservationController(this.commandBus);

		// reservation 1 //
		const creneau = Creneau.of(new Date(), new Date(), new Date('24-02-2024'));
		const fromule = Formule.of(randomUUID(), 'formule 1', 'avec prestation', 100);
		const centre = new CentreSportif(
			CentreSportifId.of(randomUUID()),
			'Massy',
			'6 rue christoph colomb',
			'91300',
			'Massy',
			'000000',
			'email@gmail.fr',
		);
		const activity = new Activite(randomUUID(), 'Foot', '???');

		// reservation 2
		const creneau2 = Creneau.of(new Date(), new Date(), new Date('29-02-2024'));
		const fromule2 = Formule.of(randomUUID(), 'formule 2', 'avec prestation', 100);
		const centre2 = new CentreSportif(
			CentreSportifId.of(randomUUID()),
			'Massy',
			'6 rue christoph colomb',
			'91300',
			'Massy',
			'000000',
			'email@gmail.fr',
		);
		const activity2 = new Activite(randomUUID(), 'basbal', '???');

		reservationController.create(creneau, fromule, centre, activity, entreprise.clientId, []);
		reservationController.create(creneau2, fromule2, centre2, activity2, entreprise.clientId, []);

		const reservation2 = this.reservationRepository.getByClient(entrepriseId)[1];
		console.log('--------------------------------------');
		console.log(`cancling reservation  ${reservation2.reservationId.id}`);

		reservationController.cancel(reservation2.reservationId);

		const reservationsAfterRemove = this.reservationRepository.getAll();
		console.log(`${reservationsAfterRemove.size} reservation found for client`);
		reservationsAfterRemove.forEach((reservation, id) => {
			console.log(`${id}: ${reservation}`);
		});
	}
}
