import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
import HelpTopicComparator$TopicNameComparator from '../../../org/bukkit/help/HelpTopicComparator$TopicNameComparator.js';
export default interface HelpTopicComparator {
    compare(arg0: any, arg1: any): number;
    compare(lhs: HelpTopic, rhs: HelpTopic): number;
    reversed(): any;
    thenComparing(keyExtractor: any): any;
    thenComparing(keyExtractor: any, keyComparator: any): any;
    thenComparing(other: any): any;
    thenComparingInt(keyExtractor: any): any;
    thenComparingLong(keyExtractor: any): any;
    thenComparingDouble(keyExtractor: any): any;
}
export default class HelpTopicComparator {
    static get $javaClass(): any;
    static helpTopicComparatorInstance(): HelpTopicComparator;
    static topicNameComparatorInstance(): HelpTopicComparator$TopicNameComparator;
}
