declare var Java: any;
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'
import HelpTopicComparator$TopicNameComparator from '../../../org/bukkit/help/HelpTopicComparator$TopicNameComparator.js'

export default interface HelpTopicComparator {
	compare(lhs: HelpTopic, rhs: HelpTopic): number;
	compare(arg0: any, arg1: any): number;
	reversed(): any;
	thenComparing(keyExtractor: any): any;
	thenComparing(other: any): any;
	thenComparing(keyExtractor: any, keyComparator: any): any;
	thenComparingDouble(keyExtractor: any): any;
	thenComparingInt(keyExtractor: any): any;
	thenComparingLong(keyExtractor: any): any;
}

export default class HelpTopicComparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicComparator');
	}

	public static helpTopicComparatorInstance(): HelpTopicComparator;
	public static helpTopicComparatorInstance(...args: any[]): any {
		return HelpTopicComparator.$javaClass.helpTopicComparatorInstance(...args);
	}

	public static topicNameComparatorInstance(): HelpTopicComparator$TopicNameComparator;
	public static topicNameComparatorInstance(...args: any[]): any {
		return HelpTopicComparator.$javaClass.topicNameComparatorInstance(...args);
	}

}

