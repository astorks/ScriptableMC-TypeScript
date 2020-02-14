declare var Java: any;

export default interface ObjectStreamField {
	compareTo(obj: any): number;
	getName(): string;
	getOffset(): number;
	getType(): any;
	getTypeCode(): string;
	getTypeString(): string;
	isPrimitive(): boolean;
	isUnshared(): boolean;
}

export default class ObjectStreamField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamField');
	}

	constructor(_name: string, type: any);
	constructor(_name: string, type: any, unshared: boolean);
	constructor(...args: any[]) {
		return new ObjectStreamField.$javaClass(...args);
	}

}

