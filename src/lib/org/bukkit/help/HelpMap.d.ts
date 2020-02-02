import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
import HelpTopicFactory from '../../../org/bukkit/help/HelpTopicFactory.js';
export default interface HelpMap {
    addTopic(arg0: HelpTopic): void;
    registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
    getIgnoredPlugins(): Array<string>;
    getHelpTopics(): any;
    getHelpTopic(arg0: string): HelpTopic;
    clear(): void;
}
export default class HelpMap {
    static get $javaClass(): any;
}
