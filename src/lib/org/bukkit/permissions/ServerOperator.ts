declare var Java: any;

export default interface ServerOperator {
	setOp(arg0: boolean): void;
	isOp(): boolean;
}

export default class ServerOperator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.ServerOperator');
	}
}

