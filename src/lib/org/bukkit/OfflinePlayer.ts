declare var Java: any;
import {Player} from '../../org/bukkit/entity/Player.js'
import {Location} from '../../org/bukkit/Location.js'
import {ServerOperator} from '../../org/bukkit/permissions/ServerOperator.js'
import {AnimalTamer} from '../../org/bukkit/entity/AnimalTamer.js'
import {ConfigurationSerializable} from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'

export interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getPlayer(): Player;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	hasPlayedBefore(): boolean;
	getBedSpawnLocation(): Location;
	isWhitelisted(): boolean;
	isOnline(): boolean;
	setWhitelisted(arg0: boolean): void;
	isBanned(): boolean;
	getUniqueId(): string;
	getName(): string;
	isOp(): boolean;
	setOp(arg0: boolean): void;
	serialize(): any;
}

export class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}
}

