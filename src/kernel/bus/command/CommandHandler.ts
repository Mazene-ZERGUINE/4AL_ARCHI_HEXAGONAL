import { Command } from './Command';

export interface CommandHandler<TCommand extends Command, TResult> {
	handle(command: TCommand): TResult;
}
