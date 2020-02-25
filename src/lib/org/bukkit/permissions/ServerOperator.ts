declare var Java: any;

export default interface ServerOperator {
	isOp(): boolean;
	setOp(arg0: boolean): void;
}

export default class ServerOperator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.permissions.ServerOperator');
	}

}

