declare var Java: any;
import AnimalTamer from './entity/AnimalTamer.js'
import ConfigurationSerializable from './configuration/serialization/ConfigurationSerializable.js'
import EntityType from './entity/EntityType.js'
import Location from './Location.js'
import Material from './Material.js'
import Player from './entity/Player.js'
import ServerOperator from './permissions/ServerOperator.js'
import Statistic from './Statistic.js'

export default interface OfflinePlayer extends ServerOperator, AnimalTamer, ConfigurationSerializable {
	decrementStatistic(arg0: Statistic): void;
	decrementStatistic(arg0: Statistic, arg1: Material): void;
	decrementStatistic(arg0: Statistic, arg1: number): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType): void;
	decrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	getBedSpawnLocation(): Location;
	getFirstPlayed(): number;
	getLastPlayed(): number;
	getName(): string;
	getPlayer(): Player;
	getStatistic(arg0: Statistic): number;
	getStatistic(arg0: Statistic, arg1: EntityType): number;
	getStatistic(arg0: Statistic, arg1: Material): number;
	getUniqueId(): string;
	hasPlayedBefore(): boolean;
	incrementStatistic(arg0: Statistic): void;
	incrementStatistic(arg0: Statistic, arg1: number): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType): void;
	incrementStatistic(arg0: Statistic, arg1: Material): void;
	incrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	isBanned(): boolean;
	isOnline(): boolean;
	isOp(): boolean;
	isWhitelisted(): boolean;
	serialize(): any;
	setOp(arg0: boolean): void;
	setStatistic(arg0: Statistic, arg1: number): void;
	setStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void;
	setStatistic(arg0: Statistic, arg1: Material, arg2: number): void;
	setWhitelisted(arg0: boolean): void;
}

export default class OfflinePlayer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.OfflinePlayer');
	}

}

