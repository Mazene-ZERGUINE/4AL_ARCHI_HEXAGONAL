export interface Class<T> {
	class: {
		new (...args: any[]): T;
	};
}
