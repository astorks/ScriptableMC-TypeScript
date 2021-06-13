declare var Java: any;

export default interface ClickType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	isCreativeAction(): boolean;
	isKeyboardClick(): boolean;
	isLeftClick(): boolean;
	isRightClick(): boolean;
	isShiftClick(): boolean;
	name(): string;
	ordinal(): number;
}

export default class ClickType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.inventory.ClickType');
	}

	public static get CONTROL_DROP(): ClickType {
		return this.$javaClass.CONTROL_DROP;
	}
	public static get CREATIVE(): ClickType {
		return this.$javaClass.CREATIVE;
	}
	public static get DOUBLE_CLICK(): ClickType {
		return this.$javaClass.DOUBLE_CLICK;
	}
	public static get DROP(): ClickType {
		return this.$javaClass.DROP;
	}
	public static get LEFT(): ClickType {
		return this.$javaClass.LEFT;
	}
	public static get MIDDLE(): ClickType {
		return this.$javaClass.MIDDLE;
	}
	public static get NUMBER_KEY(): ClickType {
		return this.$javaClass.NUMBER_KEY;
	}
	public static get RIGHT(): ClickType {
		return this.$javaClass.RIGHT;
	}
	public static get SHIFT_LEFT(): ClickType {
		return this.$javaClass.SHIFT_LEFT;
	}
	public static get SHIFT_RIGHT(): ClickType {
		return this.$javaClass.SHIFT_RIGHT;
	}
	public static get SWAP_OFFHAND(): ClickType {
		return this.$javaClass.SWAP_OFFHAND;
	}
	public static get UNKNOWN(): ClickType {
		return this.$javaClass.UNKNOWN;
	}
	public static get WINDOW_BORDER_LEFT(): ClickType {
		return this.$javaClass.WINDOW_BORDER_LEFT;
	}
	public static get WINDOW_BORDER_RIGHT(): ClickType {
		return this.$javaClass.WINDOW_BORDER_RIGHT;
	}
	public static valueOf(arg0: string): ClickType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ClickType.$javaClass.valueOf(...args);
	}

	public static values(): Array<ClickType>;
	public static values(...args: any[]): any {
		return ClickType.$javaClass.values(...args);
	}

}

