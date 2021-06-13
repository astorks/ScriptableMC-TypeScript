declare var Java: any;

export default interface StructureRotation {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class StructureRotation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.StructureRotation');
	}

	public static get CLOCKWISE_180(): StructureRotation {
		return this.$javaClass.CLOCKWISE_180;
	}
	public static get CLOCKWISE_90(): StructureRotation {
		return this.$javaClass.CLOCKWISE_90;
	}
	public static get COUNTERCLOCKWISE_90(): StructureRotation {
		return this.$javaClass.COUNTERCLOCKWISE_90;
	}
	public static get NONE(): StructureRotation {
		return this.$javaClass.NONE;
	}
	public static valueOf(arg0: string): StructureRotation;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return StructureRotation.$javaClass.valueOf(...args);
	}

	public static values(): Array<StructureRotation>;
	public static values(...args: any[]): any {
		return StructureRotation.$javaClass.values(...args);
	}

}

