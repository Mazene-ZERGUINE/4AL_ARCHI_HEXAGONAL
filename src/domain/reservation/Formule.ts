import { UUID } from 'crypto';

export class Formule {
	private readonly _id: UUID;
	private readonly _name: string;
	private readonly _description: string;
	private readonly _price: number;

	private constructor(id: UUID, name: string, description: string, price: number) {
		this._id = id;
		this._name = name;
		this._description = description;
		this._price = price;
	}

	static of(id: UUID, name: string, description: string, price: number) {
		return new Formule(id, name, description, price);
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

	get price(): number {
		return this._price;
	}

	toString(): string {
		const idStr = this._id.toString();
		const priceStr = `$${this._price.toFixed(2)}`;

		return `Formula ID: ${idStr}, Name: ${this._name}, Description: ${this._description}, Price: ${priceStr}`;
	}
}
