declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Bed extends MaterialData, Directional {
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	isHeadOfBed(): boolean;
	setHeadOfBed(isHeadOfBed: boolean): void;
	clone(): Bed;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Bed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Bed');
	}
	constructor(direction: BlockFace);
	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Bed.$javaClass(...args);
	}
}

