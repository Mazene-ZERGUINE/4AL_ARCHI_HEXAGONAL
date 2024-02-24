import { ReservationId } from './ReservationId';
import { ReservationStatus } from './ReservationStatus';
import { Creneau } from './Creneau';
import { Service } from './Service';
import { Formule } from './Formule';
import { Facture } from './Facture';

export class Reservation {
  private readonly _reservationId: ReservationId;
  private _status: ReservationStatus;
  private _creneau: Creneau;
  private _services = new Array<Service>();
  private _formule: Formule;
  private _facture: Facture;

  constructor(
    reservationId: ReservationId,
    status: ReservationStatus,
    creneau: Creneau,
    services: Service[],
    formule: Formule,
    facture: Facture,
  ) {
    this._reservationId = reservationId;
    this._status = status;
    this._creneau = creneau;
    this._services = services;
    this._formule = formule;
    this._facture = facture;
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
}
