declare var Java: any;

export default interface PlayerAnimationType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(arg0: string): PlayerAnimationType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return PlayerAnimationType.$javaClass.valueOf(...args);
	}

	public static values(): Array<PlayerAnimationType>;
	public static values(...args: any[]): any {
		return PlayerAnimationType.$javaClass.values(...args);
	}

}

