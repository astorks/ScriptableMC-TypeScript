declare var Java: any;

export default interface ComponentBuilder$FormatRetention {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ComponentBuilder$FormatRetention {
	public static get $javaClass(): any {
		return Java.type('net.md_5.bungee.api.chat.ComponentBuilder$FormatRetention');
	}

	public static get ALL(): ComponentBuilder$FormatRetention {
		return this.$javaClass.ALL;
	}
	public static get EVENTS(): ComponentBuilder$FormatRetention {
		return this.$javaClass.EVENTS;
	}
	public static get FORMATTING(): ComponentBuilder$FormatRetention {
		return this.$javaClass.FORMATTING;
	}
	public static get NONE(): ComponentBuilder$FormatRetention {
		return this.$javaClass.NONE;
	}
}

