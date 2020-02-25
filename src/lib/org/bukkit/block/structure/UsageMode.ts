declare var Java: any;

export default interface UsageMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class UsageMode {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.structure.UsageMode');
	}

	public static get CORNER(): UsageMode {
		return this.$javaClass.CORNER;
	}
	public static get DATA(): UsageMode {
		return this.$javaClass.DATA;
	}
	public static get LOAD(): UsageMode {
		return this.$javaClass.LOAD;
	}
	public static get SAVE(): UsageMode {
		return this.$javaClass.SAVE;
	}
}

