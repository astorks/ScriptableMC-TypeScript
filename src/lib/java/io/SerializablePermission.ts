declare var Java: any;

export default interface SerializablePermission {
	implies(arg0: any): boolean;
	getActions(): string;
	newPermissionCollection(): any;
	getName(): string;
	checkGuard(arg0: any): void;
}

export default class SerializablePermission {
	public static get $javaClass(): any {
		return Java.type('java.io.SerializablePermission');
	}
	constructor(arg0: string);
	constructor(arg0: string, arg1: string);
	constructor(...args: any[]) {
		return new SerializablePermission.$javaClass(...args);
	}
}

