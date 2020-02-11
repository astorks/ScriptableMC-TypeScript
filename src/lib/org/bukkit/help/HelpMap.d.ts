import HelpTopic from '../../../org/bukkit/help/HelpTopic.js';
import HelpTopicFactory from '../../../org/bukkit/help/HelpTopicFactory.js';
export default interface HelpMap {
    clear(): void;
    registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
    getHelpTopics(): any;
    addTopic(arg0: HelpTopic): void;
    getIgnoredPlugins(): Array<string>;
    getHelpTopic(arg0: string): HelpTopic;
}
export default class HelpMap {
    static get $javaClass(): any;
}
