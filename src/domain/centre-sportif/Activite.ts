import { UUID } from 'crypto';

export class Activite {
	private readonly _id: UUID;
	private readonly _name: string;
	private readonly _description: string;

	constructor(activiteId: UUID, name: string, description: string) {
		this._id = activiteId;
		this._name = name;
		this._description = description;
	}

	get id(): UUID {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get description(): string {
		return this._description;
	}
}
