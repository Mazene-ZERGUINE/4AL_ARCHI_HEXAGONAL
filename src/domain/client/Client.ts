import {ClientId} from "./ClientId";
import {DossierClient} from "./DossierClient";

export interface Client {
    createReservation(): any;  // todo: reservation object
    updateReservation(): any;  // todo: reservation object
    cancelReservation(): any;  // todo: reservation object

}

