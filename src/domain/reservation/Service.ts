import { UUID } from 'crypto';

export class Service {
	private readonly _id: UUID;
	private readonly _type: string;
	private readonly _contractor: string;

	constructor(id: UUID, type: string, contractor: string) {
		this._id = id;
		this._type = type;
		this._contractor = contractor;
	}

	get id(): UUID {
		return this._id;
	}

	get type(): string {
		return this._type;
	}

	get contractor(): string {
		return this._contractor;
	}

	toString(): string {
		const idStr = this._id.toString();
		return `Service ID: ${idStr}, Type: ${this._type}, Contractor: ${this._contractor}`;
	}
}
