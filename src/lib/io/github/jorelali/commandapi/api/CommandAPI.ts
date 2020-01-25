declare var Java: any;
import {ResultingCommandExecutor} from '../../../../../io/github/jorelali/commandapi/api/ResultingCommandExecutor.js'
import {CommandPermission} from '../../../../../io/github/jorelali/commandapi/api/CommandPermission.js'
import {CommandExecutor} from '../../../../../io/github/jorelali/commandapi/api/CommandExecutor.js'

export interface CommandAPI {
	unregister(command: string, force: boolean): void;
	unregister(command: string): void;
	register(commandName: string, aliases: Array<string>, args: any, executor: ResultingCommandExecutor): void;
	register(commandName: string, permissions: CommandPermission, args: any, executor: ResultingCommandExecutor): void;
	register(commandName: string, permissions: CommandPermission, aliases: Array<string>, args: any, executor: ResultingCommandExecutor): void;
	register(commandName: string, permissions: CommandPermission, args: any, executor: CommandExecutor): void;
	register(commandName: string, aliases: Array<string>, args: any, executor: CommandExecutor): void;
	register(commandName: string, args: any, executor: CommandExecutor): void;
	register(commandName: string, permissions: CommandPermission, aliases: Array<string>, args: any, executor: CommandExecutor): void;
	register(commandName: string, args: any, executor: ResultingCommandExecutor): void;
}

export class CommandAPI {
	public static get $javaClass(): any {
		return Java.type('io.github.jorelali.commandapi.api.CommandAPI');
	}
	constructor();
	constructor(...args: any[]) {
		return new CommandAPI.$javaClass(...args);
	}
	public static fail(message: string): void;
	public static fail(...args: any[]): any {
		return CommandAPI.$javaClass.fail(...args);
	}
	public static getInstance(): CommandAPI;
	public static getInstance(...args: any[]): any {
		return CommandAPI.$javaClass.getInstance(...args);
	}
}

