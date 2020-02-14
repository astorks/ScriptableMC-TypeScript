declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'

export default interface GenericCommandHelpTopic extends HelpTopic {
	canSee(sender: CommandSender): boolean;
	amendCanSee(amendedPermission: string): void;
	getShortText(): string;
	getFullText(forWho: CommandSender): string;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	getName(): string;
}

export default class GenericCommandHelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.GenericCommandHelpTopic');
	}
	constructor(command: Command);
	constructor(...args: any[]) {
		return new GenericCommandHelpTopic.$javaClass(...args);
	}
}

