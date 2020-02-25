declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'

export default interface GenericCommandHelpTopic extends HelpTopic {
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	canSee(sender: CommandSender): boolean;
	getFullText(forWho: CommandSender): string;
	getName(): string;
	getShortText(): string;
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

