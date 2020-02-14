declare var Java: any;
import CommandSender from '../../../org/bukkit/command/CommandSender.js'
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'

export default interface IndexHelpTopic extends HelpTopic {
	canSee(sender: CommandSender): boolean;
	amendCanSee(amendedPermission: string): void;
	getFullText(sender: CommandSender): string;
	getShortText(): string;
	amendTopic(amendedShortText: string, amendedFullText: string): void;
	getName(): string;
}

export default class IndexHelpTopic {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.IndexHelpTopic');
	}
	constructor(_name: string, shortText: string, permission: string, topics: any, preamble: string);
	constructor(_name: string, shortText: string, permission: string, topics: any);
	constructor(...args: any[]) {
		return new IndexHelpTopic.$javaClass(...args);
	}
}
