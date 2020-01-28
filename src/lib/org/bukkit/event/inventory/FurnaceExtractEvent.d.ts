import { Player } from '../../../../org/bukkit/entity/Player.js';
import { Material } from '../../../../org/bukkit/Material.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Block } from '../../../../org/bukkit/block/Block.js';
import { BlockExpEvent } from '../../../../org/bukkit/event/block/BlockExpEvent.js';
export interface FurnaceExtractEvent extends BlockExpEvent {
    getPlayer(): Player;
    getItemType(): Material;
    getItemAmount(): number;
    getHandlers(): HandlerList;
    getExpToDrop(): number;
    setExpToDrop(exp: number): void;
    getBlock(): Block;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class FurnaceExtractEvent {
    static get $javaClass(): any;
    constructor(player: Player, block: Block, itemType: Material, itemAmount: number, exp: number);
    static getHandlerList(): HandlerList;
}
