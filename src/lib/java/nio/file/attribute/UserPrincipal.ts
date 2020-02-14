declare var Java: any;

export default interface UserPrincipal {
	getName(): string;
	implies(arg0: any): boolean;
}

export default class UserPrincipal {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.UserPrincipal');
	}
}

