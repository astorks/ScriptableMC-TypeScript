declare var Java: any;

export default interface PlayerPreLoginEvent$Result {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerPreLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerPreLoginEvent$Result');
	}

	public static get ALLOWED(): PlayerPreLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_BANNED(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_FULL(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_OTHER(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
	public static get KICK_WHITELIST(): PlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static valueOf(arg0: string): PlayerPreLoginEvent$Result;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PlayerPreLoginEvent$Result.$javaClass.valueOf(...args);
	}

	public static values(): Array<PlayerPreLoginEvent$Result>;
	public static values(...args: any[]): any {
		return PlayerPreLoginEvent$Result.$javaClass.values(...args);
	}

}

