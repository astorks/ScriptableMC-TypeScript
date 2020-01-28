import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Player } from '../../../../org/bukkit/entity/Player.js';
import { TreeType } from '../../../../org/bukkit/TreeType.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { World } from '../../../../org/bukkit/World.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { WorldEvent } from '../../../../org/bukkit/event/world/WorldEvent.js';
export interface StructureGrowEvent extends WorldEvent, Cancellable {
    getHandlers(): HandlerList;
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlocks(): any;
    getSpecies(): TreeType;
    isFromBonemeal(): boolean;
    getLocation(): Location;
    getWorld(): World;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class StructureGrowEvent {
    static get $javaClass(): any;
    constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: any);
    static getHandlerList(): HandlerList;
}
