declare var Java: any;

export default interface PlayerBedEnterEvent$BedEnterResult {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerBedEnterEvent$BedEnterResult {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedEnterEvent$BedEnterResult');
	}

	public static get NOT_POSSIBLE_HERE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_HERE;
	}
	public static get NOT_POSSIBLE_NOW(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_POSSIBLE_NOW;
	}
	public static get NOT_SAFE(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.NOT_SAFE;
	}
	public static get OK(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OK;
	}
	public static get OTHER_PROBLEM(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.OTHER_PROBLEM;
	}
	public static get TOO_FAR_AWAY(): PlayerBedEnterEvent$BedEnterResult {
		return this.$javaClass.TOO_FAR_AWAY;
	}
}

