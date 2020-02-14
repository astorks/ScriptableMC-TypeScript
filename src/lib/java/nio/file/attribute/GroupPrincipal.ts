declare var Java: any;
import UserPrincipal from '../../../../java/nio/file/attribute/UserPrincipal.js'

export default interface GroupPrincipal {
	getName(): string;
	implies(subject: any): boolean;
}

export default class GroupPrincipal {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.GroupPrincipal');
	}

}

