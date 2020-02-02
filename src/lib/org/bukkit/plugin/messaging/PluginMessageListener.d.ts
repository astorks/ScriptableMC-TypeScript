import Player from '../../../../org/bukkit/entity/Player.js';
export default interface PluginMessageListener {
    onPluginMessageReceived(arg0: string, arg1: Player, arg2: Array<number>): void;
}
export default class PluginMessageListener {
    static get $javaClass(): any;
}
