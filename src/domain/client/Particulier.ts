import { Client } from './Client';
import { ClientId } from './ClientId';
import { DossierClient } from './DossierClient';

export class Particulier implements Client {
	private readonly _clientId: ClientId;

	private readonly _dossierClient: DossierClient;

	constructor(clientId: ClientId, dossierClient: DossierClient) {
		this._clientId = clientId;
		this._dossierClient = dossierClient;
	}

	cancelReservation(): any {}

	createReservation(): any {}

	updateReservation(): any {}

	get clientId(): ClientId {
		return this._clientId;
	}

	get dossierClient(): DossierClient {
		return this._dossierClient;
	}
}
