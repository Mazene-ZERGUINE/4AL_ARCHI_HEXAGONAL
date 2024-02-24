import { CommandBus } from './kernel/bus/command/CommandBus';
import { BusFactory } from './kernel/bus/BusFactory';
import { Command } from './kernel/bus/command/Command';
import { CreateReservationService } from './application/services/CreateReservationService';
import { CreateReservationCommand } from './application/ports/in/CreateReservationCommand';
import { ReservationRepository } from './adapters/out/ReservationRepository';
import { DefaultEventDispatcher } from './kernel/event/DefaultEventDispatcher';

export class App {
	private static commandeBus: CommandBus<Command, void>;

	static start() {
		console.log('🚀 App started.');
		this.registerCommandsAndQueriesAndEventHandlers();
	}

	static registerCommandsAndQueriesAndEventHandlers() {
		this.registerCommands();
		this.registerQueries();
		this.registerEventHandlers();
	}

	static registerCommands() {
		this.commandeBus = BusFactory.defaultCommandBus();
		this.commandeBus.register(
			CreateReservationCommand,
			new CreateReservationService(new ReservationRepository(new Map()), DefaultEventDispatcher.create()),
		);
	}

	static registerQueries() {
		// REGISTER TOUTES LES QUERIES
	}

	static registerEventHandlers() {
		// REGISTER TOUS LES HANDLERS
	}
}
