declare var Java: any;

export default interface CauldronLevelChangeEvent$ChangeReason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class CauldronLevelChangeEvent$ChangeReason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.CauldronLevelChangeEvent$ChangeReason');
	}

	public static get ARMOR_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.ARMOR_WASH;
	}
	public static get BANNER_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BANNER_WASH;
	}
	public static get BOTTLE_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_EMPTY;
	}
	public static get BOTTLE_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BOTTLE_FILL;
	}
	public static get BUCKET_EMPTY(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_EMPTY;
	}
	public static get BUCKET_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.BUCKET_FILL;
	}
	public static get EVAPORATE(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EVAPORATE;
	}
	public static get EXTINGUISH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.EXTINGUISH;
	}
	public static get NATURAL_FILL(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.NATURAL_FILL;
	}
	public static get SHULKER_WASH(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.SHULKER_WASH;
	}
	public static get UNKNOWN(): CauldronLevelChangeEvent$ChangeReason {
		return this.$javaClass.UNKNOWN;
	}
	public static valueOf(arg0: string): CauldronLevelChangeEvent$ChangeReason;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return CauldronLevelChangeEvent$ChangeReason.$javaClass.valueOf(...args);
	}

	public static values(): Array<CauldronLevelChangeEvent$ChangeReason>;
	public static values(...args: any[]): any {
		return CauldronLevelChangeEvent$ChangeReason.$javaClass.values(...args);
	}

}

