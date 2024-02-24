import { Command } from './Command';
import { CommandHandler } from './CommandHandler';
import { Class } from '../../Class';

export interface CommandBus<TCommand extends Command, TResult> {
	post(command: TCommand): TResult;

	// register<TCommand, TResult>(
	register<TCommand extends Command, TResult>(
		commandClass: string,
		commandHandler: CommandHandler<TCommand, TResult>,
	): void;
}
