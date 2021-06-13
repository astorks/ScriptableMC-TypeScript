declare var Java: any;

export default interface PlayerLoginEvent$Result {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerLoginEvent$Result');
	}

	public static get ALLOWED(): PlayerLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_BANNED(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_FULL(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_OTHER(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
	public static get KICK_WHITELIST(): PlayerLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static valueOf(arg0: string): PlayerLoginEvent$Result;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PlayerLoginEvent$Result.$javaClass.valueOf(...args);
	}

	public static values(): Array<PlayerLoginEvent$Result>;
	public static values(...args: any[]): any {
		return PlayerLoginEvent$Result.$javaClass.values(...args);
	}

}

