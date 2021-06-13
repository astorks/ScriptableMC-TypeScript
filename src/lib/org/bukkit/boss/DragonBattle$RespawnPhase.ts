declare var Java: any;

export default interface DragonBattle$RespawnPhase {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class DragonBattle$RespawnPhase {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.boss.DragonBattle$RespawnPhase');
	}

	public static get END(): DragonBattle$RespawnPhase {
		return this.$javaClass.END;
	}
	public static get NONE(): DragonBattle$RespawnPhase {
		return this.$javaClass.NONE;
	}
	public static get PREPARING_TO_SUMMON_PILLARS(): DragonBattle$RespawnPhase {
		return this.$javaClass.PREPARING_TO_SUMMON_PILLARS;
	}
	public static get START(): DragonBattle$RespawnPhase {
		return this.$javaClass.START;
	}
	public static get SUMMONING_DRAGON(): DragonBattle$RespawnPhase {
		return this.$javaClass.SUMMONING_DRAGON;
	}
	public static get SUMMONING_PILLARS(): DragonBattle$RespawnPhase {
		return this.$javaClass.SUMMONING_PILLARS;
	}
	public static valueOf(arg0: string): DragonBattle$RespawnPhase;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return DragonBattle$RespawnPhase.$javaClass.valueOf(...args);
	}

	public static values(): Array<DragonBattle$RespawnPhase>;
	public static values(...args: any[]): any {
		return DragonBattle$RespawnPhase.$javaClass.values(...args);
	}

}

