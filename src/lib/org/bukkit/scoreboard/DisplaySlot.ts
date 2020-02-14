declare var Java: any;

export default interface DisplaySlot {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class DisplaySlot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.scoreboard.DisplaySlot');
	}

	public static get BELOW_NAME(): DisplaySlot {
		return this.$javaClass.BELOW_NAME;
	}
	public static get PLAYER_LIST(): DisplaySlot {
		return this.$javaClass.PLAYER_LIST;
	}
	public static get SIDEBAR(): DisplaySlot {
		return this.$javaClass.SIDEBAR;
	}
}

