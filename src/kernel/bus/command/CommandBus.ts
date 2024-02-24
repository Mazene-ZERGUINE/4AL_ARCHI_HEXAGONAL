import { Command } from './Command';
import { CommandHandler } from './CommandHandler';
import { Class } from '../../Class';

export interface CommandBus<TCommand extends Command, TResult> {
	post(command: TCommand): TResult;
	register(commandClass: new (...args: any[]) => TCommand, commandHandler: CommandHandler<TCommand, TResult>): void;
}
