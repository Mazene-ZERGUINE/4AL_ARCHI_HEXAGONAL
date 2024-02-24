export class ClientId {

    _id: string;
    private constructor( id: string ) {
        this._id = id;
    }

    static of(id: string) {
        return new ClientId(id);
    }

    get id(): string {
        return this._id;
    }

    equals( other: ClientId ) {
        return this._id === other.id;
    }

}

