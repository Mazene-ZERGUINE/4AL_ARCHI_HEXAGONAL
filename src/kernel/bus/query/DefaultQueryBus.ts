// import { Class } from '../../Class';
// import {QueryBus} from "./QueryBus";
// import {Query} from "./Query";
// import {QueryHandler} from "./QueryHandler";
//
// export class DefaultQueryBus<TQuery extends Query, TResult> implements QueryBus<TQuery> {
// 	private readonly registry: Map<Class<TQuery>, QueryHandler<TQuery, TResult>>;
//
// 	constructor(registry: Map<Class<TQuery>, QueryHandler<TQuery, TResult>>) {
// 		this.registry = registry;
// 	}
//
// 	post<TResult>(query: TQuery): TResult {
// 		const queryHandler = this.registry.get(query.constructor as Class<TQuery>);
// 		if (!queryHandler) {
// 			throw new Error(`No handler registered for ${query.name()}`);
// 		}
//
// 		return queryHandler.handle(query);
// 	}
//
// 	register<TQuery, TResult>(queryClass: Class<TQuery>, queryHandler: QueryHandler<TQuery, TResult>): void {
// 		if (!this.registry.has(queryClass)) {
// 			this.registry.set(queryClass, queryHandler);
// 		}
// 	}
// }
