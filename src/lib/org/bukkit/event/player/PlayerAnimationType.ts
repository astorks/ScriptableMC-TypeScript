declare var Java: any;

export default interface PlayerAnimationType {
	name(): string;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	getDeclaringClass(): any;
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

