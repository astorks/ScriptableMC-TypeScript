declare var Java: any;

export default interface StructureBlock$Mode {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class StructureBlock$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.StructureBlock$Mode');
	}

	public static get SAVE(): StructureBlock$Mode {
		return this.$javaClass.SAVE;
	}
	public static get LOAD(): StructureBlock$Mode {
		return this.$javaClass.LOAD;
	}
	public static get CORNER(): StructureBlock$Mode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): StructureBlock$Mode {
		return this.$javaClass.DATA;
	}
}

