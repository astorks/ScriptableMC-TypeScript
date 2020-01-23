declare var Java: any;
import {HelpTopicFactory} from '../../../org/bukkit/help/HelpTopicFactory.js'
import {HelpTopic} from '../../../org/bukkit/help/HelpTopic.js'

export interface HelpMap {
	clear(): void;
	registerHelpTopicFactory(commandClass: any, factory: HelpTopicFactory): void;
	getHelpTopics(): any;
	getHelpTopic(topicName: string): HelpTopic;
	addTopic(topic: HelpTopic): void;
	getIgnoredPlugins(): any;
}

export class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}
}

