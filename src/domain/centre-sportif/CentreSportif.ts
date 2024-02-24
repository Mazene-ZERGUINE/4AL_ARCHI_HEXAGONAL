import { CentreSportifId } from './CentreSportifId';

export class CentreSportif {
	private readonly _id: CentreSportifId;
	private readonly _name: string;
	private readonly _address: string;
	private readonly _zipCode: string;
	private readonly _city: string;
	private readonly _phoneNumber: string;
	private readonly _email: string;

	constructor(
		centreSportifId: CentreSportifId,
		name: string,
		address: string,
		zipCode: string,
		city: string,
		phoneNumber: string,
		email: string,
	) {
		this._id = centreSportifId;
		this._name = name;
		this._address = address;
		this._zipCode = zipCode;
		this._city = city;
		this._phoneNumber = phoneNumber;
		this._email = email;
	}

	get id(): CentreSportifId {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	get address(): string {
		return this._address;
	}

	get zipCode(): string {
		return this._zipCode;
	}

	get city(): string {
		return this._city;
	}

	get phoneNumber(): string {
		return this._phoneNumber;
	}

	get email(): string {
		return this._email;
	}
}
