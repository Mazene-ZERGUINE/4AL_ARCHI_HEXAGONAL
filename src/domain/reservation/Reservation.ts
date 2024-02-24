import { ReservationId } from './ReservationId';
import { ReservationStatus } from './ReservationStatus';
import { Creneau } from './Creneau';
import { Service } from './Service';
import { Formule } from './Formule';
import { Facture } from './Facture';
import { CentreSportif } from '../centre-sportif/CentreSportif';
import { Activite } from '../centre-sportif/Activite';
import { ClientId } from '../client/ClientId';

export class Reservation {
	private readonly _reservationId: ReservationId;
	private readonly _status: ReservationStatus;
	private readonly _creneau: Creneau;
	private readonly _services: Array<Service>;
	private readonly _formule: Formule;
	private readonly _facture: Facture;
	private readonly _centreSportif: CentreSportif;
	private readonly _activite: Activite;
	private readonly _client: ClientId;

	constructor(
		reservationId: ReservationId,
		status: ReservationStatus,
		creneau: Creneau,
		formule: Formule,
		facture: Facture,
		centreSportif: CentreSportif,
		activite: Activite,
		clientId: ClientId,
		services: Service[] = [],
	) {
		this._reservationId = reservationId;
		this._status = status;
		this._creneau = creneau;
		this._services = services;
		this._formule = formule;
		this._facture = facture;
		this._centreSportif = centreSportif;
		this._client = clientId;
		this._activite = activite;
	}

	get client(): ClientId {
		return this._client;
	}

	get activite(): Activite {
		return this._activite;
	}

	get reservationId(): ReservationId {
		return this._reservationId;
	}

	get status(): ReservationStatus {
		return this._status;
	}

	get creneau(): Creneau {
		return this._creneau;
	}

	get services(): Service[] {
		return this._services;
	}

	get formule(): Formule {
		return this._formule;
	}

	get facture(): Facture {
		return this._facture;
	}

	get centreSportif(): CentreSportif {
		return this._centreSportif;
	}
}
