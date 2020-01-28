import { HelpTopic } from '../../../org/bukkit/help/HelpTopic.js';
import { Command } from '../../../org/bukkit/command/Command.js';
export interface HelpTopicFactory {
    createTopic(arg0: Command): HelpTopic;
}
export declare class HelpTopicFactory {
    static get $javaClass(): any;
}
