declare var Java: any;

export default interface PlayerBedEnterEvent$BedEnterResult {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): PlayerBedEnterEvent$BedEnterResult;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PlayerBedEnterEvent$BedEnterResult.$javaClass.valueOf(...args);
	}

	public static values(): Array<PlayerBedEnterEvent$BedEnterResult>;
	public static values(...args: any[]): any {
		return PlayerBedEnterEvent$BedEnterResult.$javaClass.values(...args);
	}

}

