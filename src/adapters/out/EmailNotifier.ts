import { Notification } from '../../application/ports/out/Notification';

export class EmailNotifier implements Notification {
	notify(message: string) {
		console.log(`email has been sent to user < ${message} >`);
	}
}
