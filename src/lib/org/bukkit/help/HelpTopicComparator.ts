declare var Java: any;
import HelpTopic from '../../../org/bukkit/help/HelpTopic.js'
import HelpTopicComparator$TopicNameComparator from '../../../org/bukkit/help/HelpTopicComparator$TopicNameComparator.js'

export default interface HelpTopicComparator {
	compare(lhs: HelpTopic, rhs: HelpTopic): number;
	compare(arg0: any, arg1: any): number;
	reversed(): any;
	thenComparing(arg0: any): any;
	thenComparing(arg0: any, arg1: any): any;
	thenComparing(arg0: any): any;
	thenComparingInt(arg0: any): any;
	thenComparingLong(arg0: any): any;
	thenComparingDouble(arg0: any): any;
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

