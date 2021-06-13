declare var Java: any;

export default interface ComponentBuilder$FormatRetention {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
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
	public static valueOf(_name: string): ComponentBuilder$FormatRetention;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ComponentBuilder$FormatRetention.$javaClass.valueOf(...args);
	}

	public static values(): Array<ComponentBuilder$FormatRetention>;
	public static values(...args: any[]): any {
		return ComponentBuilder$FormatRetention.$javaClass.values(...args);
	}

}

