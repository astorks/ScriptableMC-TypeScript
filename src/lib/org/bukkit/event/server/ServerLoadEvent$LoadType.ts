declare var Java: any;

export default interface ServerLoadEvent$LoadType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

