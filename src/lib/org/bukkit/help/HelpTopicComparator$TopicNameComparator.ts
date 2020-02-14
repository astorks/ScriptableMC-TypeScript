declare var Java: any;

export default interface HelpTopicComparator$TopicNameComparator {
	compare(lhs: string, rhs: string): number;
	compare(arg0: any, arg1: any): number;
	reversed(): any;
	thenComparing(arg0: any): any;
	thenComparing(arg0: any, arg1: any): any;
	thenComparing(arg0: any): any;
	thenComparingInt(arg0: any): any;
	thenComparingLong(arg0: any): any;
	thenComparingDouble(arg0: any): any;
}

export default class HelpTopicComparator$TopicNameComparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.help.HelpTopicComparator$TopicNameComparator');
	}
}

