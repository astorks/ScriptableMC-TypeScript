declare var Java: any;

export default interface PlayerResourcePackStatusEvent$Status {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerResourcePackStatusEvent$Status {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerResourcePackStatusEvent$Status');
	}

	public static get ACCEPTED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.ACCEPTED;
	}
	public static get DECLINED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.DECLINED;
	}
	public static get FAILED_DOWNLOAD(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.FAILED_DOWNLOAD;
	}
	public static get SUCCESSFULLY_LOADED(): PlayerResourcePackStatusEvent$Status {
		return this.$javaClass.SUCCESSFULLY_LOADED;
	}
}

