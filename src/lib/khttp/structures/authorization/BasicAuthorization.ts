declare var Java: any;
import Authorization from '../../../khttp/structures/authorization/Authorization.js'

export default interface BasicAuthorization {
	component1(): string;
	component2(): string;
	copy(user: string, password: string): BasicAuthorization;
	getHeader(): any;
	getPassword(): string;
	getUser(): string;
}

export default class BasicAuthorization {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.authorization.BasicAuthorization');
	}

	constructor(user: string, password: string);
	constructor(...args: any[]) {
		return new BasicAuthorization.$javaClass(...args);
	}

	public static copy$default(arg0: BasicAuthorization, arg1: string, arg2: string, arg3: number, arg4: any): BasicAuthorization;
	public static copy$default(...args: any[]): any {
		return BasicAuthorization.$javaClass.copy$default(...args);
	}

}

