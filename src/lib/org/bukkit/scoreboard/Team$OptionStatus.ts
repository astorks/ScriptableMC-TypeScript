declare var Java: any;

export default interface Team$OptionStatus {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Team$OptionStatus {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$OptionStatus');
	}

	public static get ALWAYS(): Team$OptionStatus {
		return this.$javaClass.ALWAYS;
	}
	public static get FOR_OTHER_TEAMS(): Team$OptionStatus {
		return this.$javaClass.FOR_OTHER_TEAMS;
	}
	public static get FOR_OWN_TEAM(): Team$OptionStatus {
		return this.$javaClass.FOR_OWN_TEAM;
	}
	public static get NEVER(): Team$OptionStatus {
		return this.$javaClass.NEVER;
	}
}

