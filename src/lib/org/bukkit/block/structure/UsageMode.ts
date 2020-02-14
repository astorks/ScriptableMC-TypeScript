declare var Java: any;

export default interface UsageMode {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
	ordinal(): number;
}

export default class UsageMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.UsageMode');
	}

	public static get SAVE(): UsageMode {
		return this.$javaClass.SAVE;
	}
	public static get LOAD(): UsageMode {
		return this.$javaClass.LOAD;
	}
	public static get CORNER(): UsageMode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): UsageMode {
		return this.$javaClass.DATA;
	}
}

