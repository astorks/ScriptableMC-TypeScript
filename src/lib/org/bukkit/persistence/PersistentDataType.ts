declare var Java: any;
import PersistentDataAdapterContext from '../../../org/bukkit/persistence/PersistentDataAdapterContext.js'

export default interface PersistentDataType {
	fromPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
	getComplexType(): any;
	getPrimitiveType(): any;
	toPrimitive(arg0: any, arg1: PersistentDataAdapterContext): any;
}

export default class PersistentDataType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.persistence.PersistentDataType');
	}

	public static get BYTE(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE;
	}

	public static get BYTE_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.BYTE_ARRAY;
	}

	public static get DOUBLE(): PersistentDataType {
		return PersistentDataType.$javaClass.DOUBLE;
	}

	public static get FLOAT(): PersistentDataType {
		return PersistentDataType.$javaClass.FLOAT;
	}

	public static get INTEGER(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER;
	}

	public static get INTEGER_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.INTEGER_ARRAY;
	}

	public static get LONG(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG;
	}

	public static get LONG_ARRAY(): PersistentDataType {
		return PersistentDataType.$javaClass.LONG_ARRAY;
	}

	public static get SHORT(): PersistentDataType {
		return PersistentDataType.$javaClass.SHORT;
	}

	public static get STRING(): PersistentDataType {
		return PersistentDataType.$javaClass.STRING;
	}

	public static get TAG_CONTAINER(): PersistentDataType {
		return PersistentDataType.$javaClass.TAG_CONTAINER;
	}

}

