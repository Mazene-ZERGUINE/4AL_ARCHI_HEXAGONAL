import { Command } from '../../../kernel/bus/command/Command';
import { Creneau } from '../../../domain/reservation/Creneau';
import { Formule } from '../../../domain/reservation/Formule';
import { CentreSportif } from '../../../domain/centre-sportif/CentreSportif';
import { Activite } from '../../../domain/centre-sportif/Activite';
import { Service } from '../../../domain/reservation/Service';
import { ClientId } from '../../../domain/client/ClientId';

export class CreateReservationCommand implements Command {
	private readonly _creneau: Creneau;
	private readonly _formule: Formule;
	private readonly _centreSportif: CentreSportif;
	private readonly _activite: Activite;
	private readonly _client: ClientId;
	private readonly _services: Array<Service>;

	name(): string {
		return this.constructor.name;
	}

	constructor(
		creneau: Creneau,
		formule: Formule,
		centreSportif: CentreSportif,
		activite: Activite,
		client: ClientId,
		services: Array<Service>,
	) {
		this._creneau = creneau;
		this._formule = formule;
		this._centreSportif = centreSportif;
		this._activite = activite;
		this._client = client;
		this._services = services;
	}

	get creneau(): Creneau {
		return this._creneau;
	}

	get formule(): Formule {
		return this._formule;
	}

	get centreSportif(): CentreSportif {
		return this._centreSportif;
	}

	get activite(): Activite {
		return this._activite;
	}

	get client(): ClientId {
		return this._client;
	}

	get services(): Array<Service> {
		return this._services;
	}
}
