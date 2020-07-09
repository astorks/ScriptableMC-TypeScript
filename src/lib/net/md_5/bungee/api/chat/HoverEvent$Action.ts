declare var Java: any;

export default interface HoverEvent$Action {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

