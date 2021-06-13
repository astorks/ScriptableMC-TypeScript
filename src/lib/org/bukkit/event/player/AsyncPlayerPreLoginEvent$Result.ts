declare var Java: any;

export default interface AsyncPlayerPreLoginEvent$Result {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class AsyncPlayerPreLoginEvent$Result {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.AsyncPlayerPreLoginEvent$Result');
	}

	public static get ALLOWED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.ALLOWED;
	}
	public static get KICK_BANNED(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_BANNED;
	}
	public static get KICK_FULL(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_FULL;
	}
	public static get KICK_OTHER(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_OTHER;
	}
	public static get KICK_WHITELIST(): AsyncPlayerPreLoginEvent$Result {
		return this.$javaClass.KICK_WHITELIST;
	}
	public static valueOf(arg0: string): AsyncPlayerPreLoginEvent$Result;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return AsyncPlayerPreLoginEvent$Result.$javaClass.valueOf(...args);
	}

	public static values(): Array<AsyncPlayerPreLoginEvent$Result>;
	public static values(...args: any[]): any {
		return AsyncPlayerPreLoginEvent$Result.$javaClass.values(...args);
	}

}

