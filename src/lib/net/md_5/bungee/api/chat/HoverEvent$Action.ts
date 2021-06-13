declare var Java: any;

export default interface HoverEvent$Action {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class HoverEvent$Action {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.HoverEvent$Action');
	}

	public static get SHOW_ACHIEVEMENT(): HoverEvent$Action {
		return this.$javaClass.SHOW_ACHIEVEMENT;
	}
	public static get SHOW_ENTITY(): HoverEvent$Action {
		return this.$javaClass.SHOW_ENTITY;
	}
	public static get SHOW_ITEM(): HoverEvent$Action {
		return this.$javaClass.SHOW_ITEM;
	}
	public static get SHOW_TEXT(): HoverEvent$Action {
		return this.$javaClass.SHOW_TEXT;
	}
	public static valueOf(_name: string): HoverEvent$Action;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return HoverEvent$Action.$javaClass.valueOf(...args);
	}

	public static values(): Array<HoverEvent$Action>;
	public static values(...args: any[]): any {
		return HoverEvent$Action.$javaClass.values(...args);
	}

}

