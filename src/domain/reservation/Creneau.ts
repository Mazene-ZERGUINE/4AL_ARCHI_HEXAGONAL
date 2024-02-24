export class Creneau {
	private readonly _date: Date;
	private readonly _startTime: Date;
	private readonly _endTime: Date;

	private readonly _isAvailable: boolean;

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

	getDurationInHours() {
		const difference = this._endTime.getTime() - this._startTime.getTime();
		return difference / 1000 / 60 / 60;
	}
}
