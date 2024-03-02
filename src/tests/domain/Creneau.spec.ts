import { Creneau } from '../../domain/reservation/Creneau';

describe('Creneau', () => {
	it('should create a valid Creneau instance', () => {
		const date = new Date(2024, 3, 1);
		const startTime = new Date(2024, 3, 1, 10, 0);
		const endTime = new Date(2024, 3, 1, 11, 0);
		const creneau = Creneau.of(date, startTime, endTime);

		expect(creneau).toBeInstanceOf(Creneau);
		expect(creneau.date).toEqual(date);
		expect(creneau.startTime).toEqual(startTime);
		expect(creneau.endTime).toEqual(endTime);
		expect(creneau.isAvailable).toBe(true);
	});

	it('should throw an error if endTime is before startTime', () => {
		const date = new Date(2024, 3, 1);
		const startTime = new Date(2024, 3, 1, 11, 0);
		const endTime = new Date(2024, 3, 1, 10, 0);

		expect(() => {
			Creneau.of(date, startTime, endTime);
		}).toThrow('endTime must be after startTime');
	});

	it('should correctly calculate the duration in hours', () => {
		const date = new Date(2024, 3, 1);
		const startTime = new Date(2024, 3, 1, 10, 0);
		const endTime = new Date(2024, 3, 1, 12, 0);
		const creneau = Creneau.of(date, startTime, endTime);

		expect(creneau.getDurationInHours()).toBe(2);
	});

	it('should correctly format its string representation', () => {
		const date = new Date(2024, 3, 1);
		const startTime = new Date(2024, 3, 1, 10, 0);
		const endTime = new Date(2024, 3, 1, 11, 0);
		const creneau = Creneau.of(date, startTime, endTime);

		const expectedString = `Date: 2024/3/1, Start Time: 10: 0, End Time: 11:0, Availability: Available`;
		expect(creneau.toString()).toBe(expectedString);
	});
});
