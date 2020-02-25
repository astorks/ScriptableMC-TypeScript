declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Bed extends MaterialData, Directional {
	clone(): MaterialData;
	clone(): Bed;
	clone(): any;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isHeadOfBed(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setHeadOfBed(isHeadOfBed: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Bed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Bed');
	}

	constructor();
	constructor(direction: BlockFace);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Bed.$javaClass(...args);
	}

}

