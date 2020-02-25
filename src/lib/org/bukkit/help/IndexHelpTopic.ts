declare var Java: any;
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'

export default interface IndexHelpTopic extends HelpTopic {
	amendCanSee(amendedPermission: string): void;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	canSee(sender: CommandSender): boolean;
	getFullText(sender: CommandSender): string;
	getName(): string;
	getShortText(): string;
}

export default class IndexHelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.IndexHelpTopic');
	}

	constructor(_name: string, shortText: string, permission: string, topics: any);
	constructor(_name: string, shortText: string, permission: string, topics: any, preamble: string);
	constructor(...args: any[]) {
		return new IndexHelpTopic.$javaClass(...args);
	}

}

