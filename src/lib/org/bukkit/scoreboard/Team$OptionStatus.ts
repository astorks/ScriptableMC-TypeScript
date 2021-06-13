declare var Java: any;

export default interface Team$OptionStatus {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): Team$OptionStatus;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Team$OptionStatus.$javaClass.valueOf(...args);
	}

	public static values(): Array<Team$OptionStatus>;
	public static values(...args: any[]): any {
		return Team$OptionStatus.$javaClass.values(...args);
	}

}

