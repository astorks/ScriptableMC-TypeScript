declare var Java: any;
import AnimalTamer from './entity/AnimalTamer.js'
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js'
import Location from './Location.js'
import Player from './entity/Player.js'
import ServerOperator from './permissions/ServerOperator.js'

export default interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	getBedSpawnLocation(): Location;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	getName(): string;
	getPlayer(): Player;
	getUniqueId(): string;
	hasPlayedBefore(): boolean;
	isBanned(): boolean;
	isOnline(): boolean;
	isOp(): boolean;
	isWhitelisted(): boolean;
	serialize(): any;
	setOp(arg0: boolean): void;
	setWhitelisted(arg0: boolean): void;
}

export default class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}

}

