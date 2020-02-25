declare var Java: any;

export default interface NameTagVisibility {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class NameTagVisibility {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.NameTagVisibility');
	}

	public static get ALWAYS(): NameTagVisibility {
		return this.$javaClass.ALWAYS;
	}
	public static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OTHER_TEAMS;
	}
	public static get HIDE_FOR_OWN_TEAM(): NameTagVisibility {
		return this.$javaClass.HIDE_FOR_OWN_TEAM;
	}
	public static get NEVER(): NameTagVisibility {
		return this.$javaClass.NEVER;
	}
}

