declare var Java: any;

export interface CommandPermission {
}

export class CommandPermission {
	public static get $javaClass(): any {
		return Java.type('io.github.jorelali.commandapi.api.CommandPermission');
	}
	public static fromString(permission: string): CommandPermission;
	public static fromString(...args: any[]): any {
		return CommandPermission.$javaClass.fromString(...args);
	}
}

