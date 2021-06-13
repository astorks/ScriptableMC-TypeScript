declare var Java: any;

export default interface Action {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class Action {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.block.Action');
	}

	public static get LEFT_CLICK_AIR(): Action {
		return this.$javaClass.LEFT_CLICK_AIR;
	}
	public static get LEFT_CLICK_BLOCK(): Action {
		return this.$javaClass.LEFT_CLICK_BLOCK;
	}
	public static get PHYSICAL(): Action {
		return this.$javaClass.PHYSICAL;
	}
	public static get RIGHT_CLICK_AIR(): Action {
		return this.$javaClass.RIGHT_CLICK_AIR;
	}
	public static get RIGHT_CLICK_BLOCK(): Action {
		return this.$javaClass.RIGHT_CLICK_BLOCK;
	}
	public static valueOf(arg0: string): Action;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return Action.$javaClass.valueOf(...args);
	}

	public static values(): Array<Action>;
	public static values(...args: any[]): any {
		return Action.$javaClass.values(...args);
	}

}

