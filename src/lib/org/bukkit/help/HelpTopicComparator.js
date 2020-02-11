export default class HelpTopicComparator {
    static get $javaClass() {
        return Java.type('org.bukkit.help.HelpTopicComparator');
    }
    static topicNameComparatorInstance(...args) {
        return HelpTopicComparator.$javaClass.topicNameComparatorInstance(...args);
    }
    static helpTopicComparatorInstance(...args) {
        return HelpTopicComparator.$javaClass.helpTopicComparatorInstance(...args);
    }
}
