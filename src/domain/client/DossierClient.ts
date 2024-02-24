import { PaymentMethod } from './PaymentMethod';

export class DossierClient {
	private _name: string;
	private _email: string;
	private _address: string;
	private _zipCode: string;
	private _paymentMethod: PaymentMethod;
	private _phoneNumber: string;
	private _reservationsEvents: Array<Event>;

	private constructor(
		name: string,
		email: string,
		address: string,
		zipCode: string,
		paymentMethod: PaymentMethod,
		phoneNumber: string,
		reservationsEvents: Array<Event>,
	) {
		this._name = name;
		this._email = email;
		this._address = address;
		this._zipCode = zipCode;
		this._paymentMethod = paymentMethod;
		this._phoneNumber = phoneNumber;
		this._reservationsEvents = reservationsEvents;
	}

	static of(
		name: string,
		email: string,
		address: string,
		zipCode: string,
		paymentMethod: PaymentMethod,
		phoneNumber: string,
		reservationsEvents: Array<Event>,
	): DossierClient {
		return new DossierClient(name, email, address, zipCode, paymentMethod, phoneNumber, reservationsEvents);
	}

	get name(): string {
		return this._name;
	}

	get email(): string {
		return this._email;
	}

	get address(): string {
		return this._address;
	}

	get zipCode(): string {
		return this._zipCode;
	}

	get paymentMethod(): PaymentMethod {
		return this._paymentMethod;
	}

	get phoneNumber(): string {
		return this._phoneNumber;
	}

	get reservationsEvents(): Array<Event> {
		return this._reservationsEvents;
	}
}
