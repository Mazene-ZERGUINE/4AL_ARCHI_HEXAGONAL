import { Command } from './Command';
import { CommandBus } from './CommandBus';
import { Class } from '../../Class';
import { CommandHandler } from './CommandHandler';
import { CreateReservationCommand } from '../../../application/ports/in/CreateReservationCommand';

export class DefaultCommandBus<TCommand extends Command, TResult> implements CommandBus<TCommand, TResult> {
	private readonly registry = new Map<new (...args: any[]) => TCommand, CommandHandler<TCommand, TResult>>();

	post(command: TCommand): TResult {
		const commandHandler = this.registry.get(command.constructor as new (...args: any[]) => TCommand);
		if (!commandHandler) {
			throw new Error(`No handler registered for ${command.constructor.name}`);
		}

		const res = this.registry.get(command.constructor as new (...args: any[]) => TCommand);
		console.log(res);
		return commandHandler.handle(command);
	}

	register(commandClass: new (...args: any[]) => TCommand, commandHandler: CommandHandler<TCommand, TResult>): void {
		if (!this.registry.has(commandClass)) {
			this.registry.set(commandClass, commandHandler);
		}
	}
}
