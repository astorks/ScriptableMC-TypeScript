import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { BlockData } from '../../../../org/bukkit/block/data/BlockData.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockEvent } from '../../../../org/bukkit/event/block/BlockEvent.js';
export interface BlockCanBuildEvent extends BlockEvent {
    getHandlers(): HandlerList;
    getMaterial(): Material;
    getPlayer(): Player;
    getBlockData(): BlockData;
    isBuildable(): boolean;
    setBuildable(cancel: boolean): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class BlockCanBuildEvent {
    static get $javaClass(): any;
    constructor(block: Block, type: BlockData, canBuild: boolean);
    constructor(block: Block, player: Player, type: BlockData, canBuild: boolean);
    static getHandlerList(): HandlerList;
}
