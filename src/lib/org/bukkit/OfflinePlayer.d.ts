import AnimalTamer from '../../org/bukkit/entity/AnimalTamer.js';
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import Location from '../../org/bukkit/Location.js';
import Player from '../../org/bukkit/entity/Player.js';
import ServerOperator from '../../org/bukkit/permissions/ServerOperator.js';
export default interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    getName(): string;
    getUniqueId(): string;
    getBedSpawnLocation(): Location;
    isOnline(): boolean;
    setWhitelisted(arg0: boolean): void;
    getFirstPlayed(): number;
    isBanned(): boolean;
    isWhitelisted(): boolean;
    hasPlayedBefore(): boolean;
    getPlayer(): Player;
    getLastPlayed(): number;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    serialize(): any;
}
export default class OfflinePlayer {
    static get $javaClass(): any;
}
