declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'

export default interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
	clone(): PistonBaseMaterial;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	isSticky(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setPowered(powered: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PistonBaseMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PistonBaseMaterial');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PistonBaseMaterial.$javaClass(...args);
	}

}

