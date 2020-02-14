declare var Java: any;
import GroupPrincipal from '../../../../java/nio/file/attribute/GroupPrincipal.js'
import UserPrincipal from '../../../../java/nio/file/attribute/UserPrincipal.js'

export default interface UserPrincipalLookupService {
	lookupPrincipalByName(arg0: string): UserPrincipal;
	lookupPrincipalByGroupName(arg0: string): GroupPrincipal;
}

export default class UserPrincipalLookupService {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.UserPrincipalLookupService');
	}
}

