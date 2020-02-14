declare var Java: any;
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'
import HelpTopicFactory from '../../../org/bukkit/help/HelpTopicFactory.js'

export default interface HelpMap {
	getHelpTopics(): any;
	getHelpTopic(arg0: string): HelpTopic;
	addTopic(arg0: HelpTopic): void;
	registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
	getIgnoredPlugins(): Array<string>;
	clear(): void;
}

export default class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
}

