declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface Comparator extends MaterialData, Directional, Redstone {
	clone(): MaterialData;
	clone(): Comparator;
	clone(): any;
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
	constructor(type: Material);
	constructor(facingDirection: BlockFace);
	constructor(facingDirection: BlockFace, isSubtraction: boolean);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, isSubtraction: boolean, state: boolean);
	constructor(...args: any[]) {
		return new Comparator.$javaClass(...args);
	}

}

