declare var Java: any;

export default interface UsageMode {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): UsageMode;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return UsageMode.$javaClass.valueOf(...args);
	}

	public static values(): Array<UsageMode>;
	public static values(...args: any[]): any {
		return UsageMode.$javaClass.values(...args);
	}

}

