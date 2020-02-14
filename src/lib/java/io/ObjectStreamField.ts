declare var Java: any;

export default interface ObjectStreamField {
	isPrimitive(): boolean;
	compareTo(arg0: any): number;
	getName(): string;
	getType(): any;
	getTypeCode(): string;
	getTypeString(): string;
	getOffset(): number;
	isUnshared(): boolean;
}

export default class ObjectStreamField {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamField');
	}
	constructor(arg0: string, arg1: any, arg2: boolean);
	constructor(arg0: string, arg1: any);
	constructor(...args: any[]) {
		return new ObjectStreamField.$javaClass(...args);
	}
}

