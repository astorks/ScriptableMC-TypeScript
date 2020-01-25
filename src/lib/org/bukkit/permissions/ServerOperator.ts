declare var Java: any;

export interface ServerOperator {
	isOp(): boolean;
	setOp(arg0: boolean): void;
}

export class ServerOperator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.ServerOperator');
	}
}

