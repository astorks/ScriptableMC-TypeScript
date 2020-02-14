declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface Comparator extends MaterialData, Directional, Redstone {
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	isPowered(): boolean;
	setSubtractionMode(isSubtraction: boolean): void;
	isSubtractionMode(): boolean;
	isBeingPowered(): boolean;
	clone(): Comparator;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Comparator');
	}
	constructor();
	constructor(facingDirection: BlockFace);
	constructor(facingDirection: BlockFace, isSubtraction: boolean);
	constructor(facingDirection: BlockFace, isSubtraction: boolean, state: boolean);
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Comparator.$javaClass(...args);
	}
}

