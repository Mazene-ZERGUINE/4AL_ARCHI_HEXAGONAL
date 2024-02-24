export class Service {
    get type(): string {
        return this._type;
    }

    get contractor(): string {
        return this._contractor;
    }

    private _type: string;

    private _contractor: string;


    constructor(type: string, contractor: string) {
        this._type = type;
        this._contractor = contractor;
    }


}