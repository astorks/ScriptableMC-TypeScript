declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import OfflinePlayer from '../../../org/bukkit/OfflinePlayer.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import SkullType from '../../../org/bukkit/SkullType.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface Skull extends TileState {
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getData(): MaterialData;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMetadata(arg0: string): Array<MetadataValue>;
	getOwner(): string;
	getOwningPlayer(): OfflinePlayer;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getRotation(): BlockFace;
	getSkullType(): SkullType;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	hasOwner(): boolean;
	isPlaced(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBlockData(arg0: BlockData): void;
	setData(arg0: MaterialData): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setOwner(arg0: string): boolean;
	setOwningPlayer(arg0: OfflinePlayer): void;
	setRawData(arg0: number): void;
	setRotation(arg0: BlockFace): void;
	setSkullType(arg0: SkullType): void;
	setType(arg0: Material): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class Skull {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Skull');
	}

}

