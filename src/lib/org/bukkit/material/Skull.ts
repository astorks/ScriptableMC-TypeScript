declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Skull extends MaterialData, Directional {
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	clone(): Skull;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Skull {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Skull');
	}
	constructor(direction: BlockFace);
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Skull.$javaClass(...args);
	}
}

