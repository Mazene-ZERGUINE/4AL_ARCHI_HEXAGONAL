export class Creneau {
	private readonly _date: Date;
	private readonly _startTime: Date;
	private readonly _endTime: Date;

	private _isAvailable: boolean;

	private constructor(date: Date, startTime: Date, endTime: Date, isAvailable: boolean) {
		this._date = date;
		this._startTime = startTime;
		this._endTime = endTime;
		this._isAvailable = isAvailable;
	}

	static of(date: Date, startTime: Date, endTime: Date): Creneau {
		if (endTime <= startTime) {
			throw new Error('endTime must be after startTime');
		}

		return new Creneau(date, startTime, endTime, true);
	}

	get date(): Date {
		return this._date;
	}

	get startTime(): Date {
		return this._startTime;
	}

	get endTime(): Date {
		return this._endTime;
	}

	get isAvailable(): boolean {
		return this._isAvailable;
	}

	set isAvailable(isAvailable: boolean) {
		this._isAvailable = isAvailable;
	}

	getDurationInHours() {
		const difference = this._endTime.getTime() - this._startTime.getTime();
		return difference / 1000 / 60 / 60;
	}

	toString(): string {
		const dateStr = this._date.getFullYear() + '/' + this._date.getMonth() + '/' + this._date.getDate();
		const startTimeStr = this._startTime.getHours() + ': ' + this.startTime.getMinutes();
		const endTimeStr = this._endTime.getHours() + ':' + this._endTime.getMinutes();
		const availabilityStr = this._isAvailable ? 'Available' : 'Not Available';

		return `Date: ${dateStr}, Start Time: ${startTimeStr}, End Time: ${endTimeStr}, Availability: ${availabilityStr}`;
	}
}
