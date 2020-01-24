declare var Java: any;
import {Player} from '../../org/bukkit/entity/Player.js'
import {Location} from '../../org/bukkit/Location.js'
import {ServerOperator} from '../../org/bukkit/permissions/ServerOperator.js'
import {AnimalTamer} from '../../org/bukkit/entity/AnimalTamer.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getName(): string;
	getPlayer(): Player;
	getBedSpawnLocation(): Location;
	isBanned(): boolean;
	hasPlayedBefore(): boolean;
	setWhitelisted(value: boolean): void;
	isWhitelisted(): boolean;
	isOnline(): boolean;
	getFirstPlayed(): number;
	getUniqueId(): string;
	getLastPlayed(): number;
	isOp(): boolean;
	setOp(value: boolean): void;
	serialize(): any;
}

export class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}
}

