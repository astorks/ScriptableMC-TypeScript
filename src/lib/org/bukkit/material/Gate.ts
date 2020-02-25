declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Openable from '../../../org/bukkit/material/Openable.js'

export default interface Gate extends MaterialData, Directional, Openable {
	clone(): Gate;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isOpen(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setOpen(isOpen: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Gate {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Gate');
	}

	constructor();
	constructor(data: number);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Gate.$javaClass(...args);
	}

}

