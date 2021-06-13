declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'

export default interface Comparator extends MaterialData, Directional, Redstone {
	clone(): any;
	clone(): Comparator;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isBeingPowered(): boolean;
	isPowered(): boolean;
	isSubtractionMode(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setSubtractionMode(isSubtraction: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Comparator');
	}

	constructor();
	constructor(facingDirection: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, isSubtraction: boolean);
	constructor(facingDirection: BlockFace, isSubtraction: boolean, state: boolean);
	constructor(...args: any[]) {
		return new Comparator.$javaClass(...args);
	}

}

