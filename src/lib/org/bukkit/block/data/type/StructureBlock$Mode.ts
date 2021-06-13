declare var Java: any;

export default interface StructureBlock$Mode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class StructureBlock$Mode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.StructureBlock$Mode');
	}

	public static get CORNER(): StructureBlock$Mode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): StructureBlock$Mode {
		return this.$javaClass.DATA;
	}
	public static get LOAD(): StructureBlock$Mode {
		return this.$javaClass.LOAD;
	}
	public static get SAVE(): StructureBlock$Mode {
		return this.$javaClass.SAVE;
	}
	public static valueOf(arg0: string): StructureBlock$Mode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return StructureBlock$Mode.$javaClass.valueOf(...args);
	}

	public static values(): Array<StructureBlock$Mode>;
	public static values(...args: any[]): any {
		return StructureBlock$Mode.$javaClass.values(...args);
	}

}

