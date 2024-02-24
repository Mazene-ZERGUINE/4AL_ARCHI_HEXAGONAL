import { UUID } from 'crypto';

export class ClientId {
	_id: UUID;
	private constructor(id: UUID) {
		this._id = id;
	}

	static of(id: UUID) {
		return new ClientId(id);
	}

	get id(): string {
		return this._id;
	}

	equals(other: ClientId) {
		return this._id === other.id;
	}
}
