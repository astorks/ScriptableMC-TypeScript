declare var Java: any;

export default interface ServerLoadEvent$LoadType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class ServerLoadEvent$LoadType {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.server.ServerLoadEvent$LoadType');
	}

	public static get RELOAD(): ServerLoadEvent$LoadType {
		return this.$javaClass.RELOAD;
	}
	public static get STARTUP(): ServerLoadEvent$LoadType {
		return this.$javaClass.STARTUP;
	}
	public static valueOf(arg0: string): ServerLoadEvent$LoadType;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return ServerLoadEvent$LoadType.$javaClass.valueOf(...args);
	}

	public static values(): Array<ServerLoadEvent$LoadType>;
	public static values(...args: any[]): any {
		return ServerLoadEvent$LoadType.$javaClass.values(...args);
	}

}

