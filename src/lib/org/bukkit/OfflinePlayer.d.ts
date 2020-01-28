import { Location } from '../../org/bukkit/Location.js';
import { Player } from '../../org/bukkit/entity/Player.js';
import { ServerOperator } from '../../org/bukkit/permissions/ServerOperator.js';
import { AnimalTamer } from '../../org/bukkit/entity/AnimalTamer.js';
import { ConfigurationSerializable } from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
    setWhitelisted(arg0: boolean): void;
    hasPlayedBefore(): boolean;
    getBedSpawnLocation(): Location;
    getFirstPlayed(): number;
    getPlayer(): Player;
    getUniqueId(): string;
    isOnline(): boolean;
    getLastPlayed(): number;
    isBanned(): boolean;
    isWhitelisted(): boolean;
    getName(): string;
    isOp(): boolean;
    setOp(arg0: boolean): void;
    serialize(): any;
}
export declare class OfflinePlayer {
    static get $javaClass(): any;
}
