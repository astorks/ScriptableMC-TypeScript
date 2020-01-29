import { Location } from '../../org/bukkit/Location.js';
import { Player } from '../../org/bukkit/entity/Player.js';
import { ServerOperator } from '../../org/bukkit/permissions/ServerOperator.js';
import { AnimalTamer } from '../../org/bukkit/entity/AnimalTamer.js';
import { ConfigurationSerializable } from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    getName(): string;
    getUniqueId(): string;
    getBedSpawnLocation(): Location;
    isWhitelisted(): boolean;
    isOnline(): boolean;
    getPlayer(): Player;
    getFirstPlayed(): number;
    hasPlayedBefore(): boolean;
    getLastPlayed(): number;
    isBanned(): boolean;
    setWhitelisted(arg0: boolean): void;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    serialize(): any;
}
export declare class OfflinePlayer {
    static get $javaClass(): any;
}
