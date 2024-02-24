import { Command } from './Command';
import { CommandBus } from './CommandBus';
import { Class } from '../../Class';
import { CommandHandler } from './CommandHandler';

export class DefaultCommandBus<TCommand extends Command, TResult> implements CommandBus<TCommand, TResult> {
	private readonly registry: Map<Class<TCommand>, CommandHandler<TCommand, TResult>>;

	constructor(registry: Map<Class<TCommand>, CommandHandler<TCommand, TResult>>) {
		this.registry = registry;
	}

	post(command: TCommand): TResult {
		const commandHandler = this.registry.get(command.constructor as Class<TCommand>);
		if (!commandHandler) {
			throw new Error(`No handler registered for ${command.constructor.name}`);
		}

		const res = this.registry.get(command.constructor as Class<TCommand>);
		console.log(res);
		return commandHandler.handle(command);
	}

	register(commandClass: Class<TCommand>, commandHandler: CommandHandler<TCommand, TResult>): void {
		if (!this.registry.has(commandClass)) {
			this.registry.set(commandClass, commandHandler);
		}
	}
}
