declare var Java: any;

export default interface Team$Option {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Team$Option {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.Team$Option');
	}

	public static get COLLISION_RULE(): Team$Option {
		return this.$javaClass.COLLISION_RULE;
	}
	public static get DEATH_MESSAGE_VISIBILITY(): Team$Option {
		return this.$javaClass.DEATH_MESSAGE_VISIBILITY;
	}
	public static get NAME_TAG_VISIBILITY(): Team$Option {
		return this.$javaClass.NAME_TAG_VISIBILITY;
	}
}

