declare var Java: any;

export default interface Raid$RaidStatus {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Raid$RaidStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.Raid$RaidStatus');
	}

	public static get LOSS(): Raid$RaidStatus {
		return this.$javaClass.LOSS;
	}
	public static get ONGOING(): Raid$RaidStatus {
		return this.$javaClass.ONGOING;
	}
	public static get STOPPED(): Raid$RaidStatus {
		return this.$javaClass.STOPPED;
	}
	public static get VICTORY(): Raid$RaidStatus {
		return this.$javaClass.VICTORY;
	}
}

