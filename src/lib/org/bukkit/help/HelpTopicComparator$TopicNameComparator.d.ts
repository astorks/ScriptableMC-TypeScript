export default interface HelpTopicComparator$TopicNameComparator {
    compare(lhs: string, rhs: string): number;
    compare(arg0: any, arg1: any): number;
    reversed(): any;
    thenComparing(keyExtractor: any): any;
    thenComparing(keyExtractor: any, keyComparator: any): any;
    thenComparing(other: any): any;
    thenComparingInt(keyExtractor: any): any;
    thenComparingLong(keyExtractor: any): any;
    thenComparingDouble(keyExtractor: any): any;
}
export default class HelpTopicComparator$TopicNameComparator {
    static get $javaClass(): any;
}
