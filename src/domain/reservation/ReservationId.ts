import * as crypto from "crypto";

export class ReservationId {

    _id: crypto.UUID;
    private constructor( id: crypto.UUID ) {
        this._id = id;
    }

    static of(id: crypto.UUID) {
        return new ReservationId(id);
    }

    get id(): string {
        return this._id;
    }

    equals( other: ReservationId ) {
        return this._id === other.id;
    }

}