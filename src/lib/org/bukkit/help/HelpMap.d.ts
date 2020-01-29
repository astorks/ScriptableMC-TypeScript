import { HelpTopicFactory } from '../../../org/bukkit/help/HelpTopicFactory.js';
import { HelpTopic } from '../../../org/bukkit/help/HelpTopic.js';
export interface HelpMap {
    clear(): void;
    registerHelpTopicFactory(arg0: any, arg1: HelpTopicFactory): void;
    getHelpTopic(arg0: string): HelpTopic;
    getHelpTopics(): any;
    addTopic(arg0: HelpTopic): void;
    getIgnoredPlugins(): any;
}
export declare class HelpMap {
    static get $javaClass(): any;
}
