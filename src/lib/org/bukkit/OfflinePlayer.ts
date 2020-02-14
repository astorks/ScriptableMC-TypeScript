declare var Java: any;
import AnimalTamer from '../../org/bukkit/entity/AnimalTamer.js'
import ConfigurationSerializable from '../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import Location from '../../org/bukkit/Location.js'
import Player from '../../org/bukkit/entity/Player.js'
import ServerOperator from '../../org/bukkit/permissions/ServerOperator.js'

export default interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getUniqueId(): string;
	isOnline(): boolean;
	setWhitelisted(arg0: boolean): void;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	hasPlayedBefore(): boolean;
	getBedSpawnLocation(): Location;
	isWhitelisted(): boolean;
	getPlayer(): Player;
	isBanned(): boolean;
	getName(): string;
	setOp(arg0: boolean): void;
	isOp(): boolean;
	serialize(): any;
}

export default class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}
}

