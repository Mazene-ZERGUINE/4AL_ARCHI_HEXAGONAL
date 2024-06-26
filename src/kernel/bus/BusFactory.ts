import { CommandBus } from './command/CommandBus';
import { DefaultCommandBus } from './command/DefaultCommandBus';
import { Command } from './command/Command';

export class BusFactory {
	private constructor() {
		throw new Error('BusFactory is a static class');
	}

	static defaultCommandBus(): CommandBus<Command, void> {
		return new DefaultCommandBus(new Map());
	}

	// static defaultQueryBus(): QueryBus {
	// 	return new DefaultQueryBus();
	// }
}
