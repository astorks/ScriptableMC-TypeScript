import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Location from '../../../../org/bukkit/Location.js';
import Player from '../../../../org/bukkit/entity/Player.js';
import TreeType from '../../../../org/bukkit/TreeType.js';
import World from '../../../../org/bukkit/World.js';
import WorldEvent from '../../../../org/bukkit/event/world/WorldEvent.js';
export default interface StructureGrowEvent extends WorldEvent, Cancellable {
    getLocation(): Location;
    getPlayer(): Player;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getBlocks(): any;
    isFromBonemeal(): boolean;
    getSpecies(): TreeType;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class StructureGrowEvent {
    static get $javaClass(): any;
    constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: any);
    static getHandlerList(): HandlerList;
}
