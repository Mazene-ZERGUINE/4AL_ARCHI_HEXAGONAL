import { UUID } from "crypto";
import {ClientId} from "../client/ClientId";

export class Facture {

    private readonly _id: UUID;

    private _price: number;

    private _client: ClientId;

    private _date: Date;


    constructor(id: UUID, price: number, client: ClientId, date: Date) {
        this._id = id;
        this._price = price;
        this._client = client;
        this._date = date;
    }

    get id(): UUID {
        return this._id;
    }

    get price(): number {
        return this._price;
    }

    get client(): ClientId {
        return this._client;
    }

    get date(): Date {
        return this._date;
    }
}