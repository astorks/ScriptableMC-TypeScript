declare var Java: any;

export default interface StructureRotation {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class StructureRotation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.StructureRotation');
	}

	public static get NONE(): StructureRotation {
		return this.$javaClass.NONE;
	}
	public static get CLOCKWISE_90(): StructureRotation {
		return this.$javaClass.CLOCKWISE_90;
	}
	public static get CLOCKWISE_180(): StructureRotation {
		return this.$javaClass.CLOCKWISE_180;
	}
	public static get COUNTERCLOCKWISE_90(): StructureRotation {
		return this.$javaClass.COUNTERCLOCKWISE_90;
	}
}

