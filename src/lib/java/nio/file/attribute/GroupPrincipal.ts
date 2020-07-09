declare var Java: any;
import UserPrincipal from './UserPrincipal.js'

export default interface GroupPrincipal extends UserPrincipal {
	getName(): string;
	implies(subject: any): boolean;
}

export default class GroupPrincipal {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.GroupPrincipal');
	}

}

