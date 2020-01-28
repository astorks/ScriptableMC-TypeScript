import { HelpTopic } from '../../../org/bukkit/help/HelpTopic.js';
import { HelpTopicFactory } from '../../../org/bukkit/help/HelpTopicFactory.js';
export interface HelpMap {
    getHelpTopics(): any;
    getHelpTopic(arg0: string): HelpTopic;
    addTopic(arg0: HelpTopic): void;
    registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
    getIgnoredPlugins(): any;
    clear(): void;
}
export declare class HelpMap {
    static get $javaClass(): any;
}
