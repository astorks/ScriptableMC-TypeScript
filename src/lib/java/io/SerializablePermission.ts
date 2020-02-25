declare var Java: any;

export default interface SerializablePermission {
	checkGuard(object: any): void;
	getActions(): string;
	getName(): string;
	implies(p: any): boolean;
	newPermissionCollection(): any;
}

export default class SerializablePermission {
	public static get $javaClass(): any {
		return Java.type('java.io.SerializablePermission');
	}

	constructor(_name: string);
	constructor(_name: string, actions: string);
	constructor(...args: any[]) {
		return new SerializablePermission.$javaClass(...args);
	}

}

