declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'

export default interface Hopper extends MaterialData, Directional, Redstone {
	clone(): Hopper;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isActive(): boolean;
	isPowered(): boolean;
	setActive(isActive: boolean): void;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Hopper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Hopper');
	}

	constructor();
	constructor(facingDirection: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(facingDirection: BlockFace, isActive: boolean);
	constructor(...args: any[]) {
		return new Hopper.$javaClass(...args);
	}

}

