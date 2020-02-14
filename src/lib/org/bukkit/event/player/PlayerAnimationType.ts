declare var Java: any;

export default interface PlayerAnimationType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class PlayerAnimationType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerAnimationType');
	}

	public static get ARM_SWING(): PlayerAnimationType {
		return this.$javaClass.ARM_SWING;
	}
}

