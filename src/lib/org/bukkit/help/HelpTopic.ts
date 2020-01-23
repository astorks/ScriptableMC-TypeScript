declare var Java: any;
import {CommandSender} from '../../../org/bukkit/command/CommandSender.js'

export interface HelpTopic {
	getName(): string;
	canSee(player: CommandSender): boolean;
	amendCanSee(amendedPermission: string): void;
	getShortText(): string;
	getFullText(forWho: CommandSender): string;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
}

export class HelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopic');
	}
	constructor();
	constructor(...args: any[]) {
		return new HelpTopic.$javaClass(...args);
	}
}

