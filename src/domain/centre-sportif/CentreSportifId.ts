import { UUID } from 'crypto';

export class CentreSportifId {
	private readonly _id: UUID;

	constructor(id: UUID) {
		this._id = id;
	}

	public static of(id: UUID): CentreSportifId {
		return new CentreSportifId(id);
	}

	get id(): UUID {
		return this._id;
	}

	equals(other: CentreSportifId) {
		return this._id === other.id;
	}
}
