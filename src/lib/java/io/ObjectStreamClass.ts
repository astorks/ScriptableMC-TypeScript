declare var Java: any;
import ObjectStreamField from '../../java/io/ObjectStreamField.js'
import Serializable from '../../java/io/Serializable.js'

export default interface ObjectStreamClass {
	forClass(): any;
	getSerialVersionUID(): number;
	getName(): string;
	getFields(): Array<ObjectStreamField>;
	getField(arg0: string): ObjectStreamField;
}

export default class ObjectStreamClass {
	public static get $javaClass(): any {
		return Java.type('java.io.ObjectStreamClass');
	}
	public static get NO_FIELDS(): Array<ObjectStreamField> {
		return ObjectStreamClass.$javaClass.NO_FIELDS;
	}
	public static lookupAny(arg0: any): ObjectStreamClass;
	public static lookupAny(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookupAny(...args);
	}
	public static lookup(arg0: any): ObjectStreamClass;
	public static lookup(...args: any[]): any {
		return ObjectStreamClass.$javaClass.lookup(...args);
	}
}

