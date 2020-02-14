declare var Java: any;

export default interface PlayerFishEvent$State {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerFishEvent$State {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerFishEvent$State');
	}

	public static get BITE(): PlayerFishEvent$State {
		return this.$javaClass.BITE;
	}
	public static get CAUGHT_ENTITY(): PlayerFishEvent$State {
		return this.$javaClass.CAUGHT_ENTITY;
	}
	public static get CAUGHT_FISH(): PlayerFishEvent$State {
		return this.$javaClass.CAUGHT_FISH;
	}
	public static get FAILED_ATTEMPT(): PlayerFishEvent$State {
		return this.$javaClass.FAILED_ATTEMPT;
	}
	public static get FISHING(): PlayerFishEvent$State {
		return this.$javaClass.FISHING;
	}
	public static get IN_GROUND(): PlayerFishEvent$State {
		return this.$javaClass.IN_GROUND;
	}
	public static get REEL_IN(): PlayerFishEvent$State {
		return this.$javaClass.REEL_IN;
	}
}

