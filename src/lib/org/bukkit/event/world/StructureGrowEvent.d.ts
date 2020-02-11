import BlockState from '../../../../org/bukkit/block/BlockState.js';
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
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getSpecies(): TreeType;
    isFromBonemeal(): boolean;
    getBlocks(): Array<BlockState>;
    getWorld(): World;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class StructureGrowEvent {
    static get $javaClass(): any;
    constructor(location: Location, species: TreeType, bonemeal: boolean, player: Player, blocks: Array<any>);
    static getHandlerList(): HandlerList;
}
