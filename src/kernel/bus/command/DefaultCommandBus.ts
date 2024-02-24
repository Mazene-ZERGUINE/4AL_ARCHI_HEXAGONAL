import { Command } from './Command';
import { CommandBus } from './CommandBus';
import { Class } from '../../Class';
import { CommandHandler } from './CommandHandler';
import { CreateReservationCommand } from '../../../application/ports/in/CreateReservationCommand';

export class DefaultCommandBus<TCommand extends Command, TResult> implements CommandBus<TCommand, TResult> {
	private readonly registry: Map<string, CommandHandler<TCommand, TResult>>;

	constructor(registry: Map<string, CommandHandler<TCommand, TResult>>) {
		this.registry = registry;
	}

	post(command: TCommand): TResult {
		const commandHandler = this.registry.get(command.name());
		if (!commandHandler) {
			throw new Error(`No handler registered for ${command.name()}`);
		}

		return commandHandler.handle(command);
	}

	// Class<TCommand>
	register(commandClass: string, commandHandler: CommandHandler<TCommand, TResult>): void {
		console.log('in DefaultCommandBus.register');

		if (!this.registry.has(commandClass)) {
			this.registry.set(commandClass, commandHandler);

			console.log('set commandHandler');
			console.log(this.registry);
			console.log(this.registry.get(commandClass));
		}
	}
}
