import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { BlockData } from '../../../../org/bukkit/block/data/BlockData.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockCanBuildEvent extends BlockEvent {
    getPlayer(): Player;
    getMaterial(): Material;
    getBlockData(): BlockData;
    getHandlers(): HandlerList;
    isBuildable(): boolean;
    setBuildable(cancel: boolean): void;
    getBlock(): Block;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class BlockCanBuildEvent {
    static get $javaClass(): any;
    constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
    constructor(block: Block, type: BlockData, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
