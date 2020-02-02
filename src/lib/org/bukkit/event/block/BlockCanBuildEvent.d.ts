import Block from '../../../../org/bukkit/block/Block.js';
import BlockData from '../../../../org/bukkit/block/data/BlockData.js';
import BlockEvent from '../../../../org/bukkit/event/block/BlockEvent.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Material from '../../../../org/bukkit/Material.js';
import Player from '../../../../org/bukkit/entity/Player.js';
export default interface BlockCanBuildEvent extends BlockEvent {
    getPlayer(): Player;
    getMaterial(): Material;
    getHandlers(): HandlerList;
    getBlockData(): BlockData;
    setBuildable(cancel: boolean): void;
    isBuildable(): boolean;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class BlockCanBuildEvent {
    static get $javaClass(): any;
    constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
    constructor(block: Block, type: BlockData, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
