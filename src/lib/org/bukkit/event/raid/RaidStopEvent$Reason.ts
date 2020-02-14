declare var Java: any;

export default interface RaidStopEvent$Reason {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class RaidStopEvent$Reason {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.raid.RaidStopEvent$Reason');
	}

	public static get FINISHED(): RaidStopEvent$Reason {
		return this.$javaClass.FINISHED;
	}
	public static get NOT_IN_VILLAGE(): RaidStopEvent$Reason {
		return this.$javaClass.NOT_IN_VILLAGE;
	}
	public static get PEACE(): RaidStopEvent$Reason {
		return this.$javaClass.PEACE;
	}
	public static get TIMEOUT(): RaidStopEvent$Reason {
		return this.$javaClass.TIMEOUT;
	}
	public static get UNSPAWNABLE(): RaidStopEvent$Reason {
		return this.$javaClass.UNSPAWNABLE;
	}
}

