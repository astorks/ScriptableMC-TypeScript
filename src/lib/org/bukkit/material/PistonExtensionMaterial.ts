declare var Java: any;
import Attachable from './Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface PistonExtensionMaterial extends MaterialData, Attachable {
	clone(): PistonExtensionMaterial;
	clone(): MaterialData;
	clone(): any;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isSticky(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setSticky(sticky: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PistonExtensionMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PistonExtensionMaterial');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PistonExtensionMaterial.$javaClass(...args);
	}

}

