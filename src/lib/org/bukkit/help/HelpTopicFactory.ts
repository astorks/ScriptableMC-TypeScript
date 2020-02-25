declare var Java: any;
import Command from '../../../org/bukkit/command/Command.js'
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'

export default interface HelpTopicFactory {
	createTopic(arg0: Command): HelpTopic;
}

export default class HelpTopicFactory {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicFactory');
	}

}

