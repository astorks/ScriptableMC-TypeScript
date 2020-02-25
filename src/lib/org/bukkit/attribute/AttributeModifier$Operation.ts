declare var Java: any;

export default interface AttributeModifier$Operation {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class AttributeModifier$Operation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier$Operation');
	}

	public static get ADD_NUMBER(): AttributeModifier$Operation {
		return this.$javaClass.ADD_NUMBER;
	}
	public static get ADD_SCALAR(): AttributeModifier$Operation {
		return this.$javaClass.ADD_SCALAR;
	}
	public static get MULTIPLY_SCALAR_1(): AttributeModifier$Operation {
		return this.$javaClass.MULTIPLY_SCALAR_1;
	}
}

