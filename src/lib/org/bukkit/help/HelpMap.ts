declare var Java: any;
import HelpTopic from './HelpTopic.js'
import HelpTopicFactory from './HelpTopicFactory.js'

export default interface HelpMap {
	addTopic(arg0: HelpTopic): void;
	clear(): void;
	getHelpTopic(arg0: string): HelpTopic;
	getHelpTopics(): Array<HelpTopic>;
	getIgnoredPlugins(): Array<string>;
	registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
}

export default class HelpMap {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpMap');
	}

}

