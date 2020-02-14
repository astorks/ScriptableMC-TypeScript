declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface Observer extends MaterialData, Directional, Redstone {
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	isPowered(): boolean;
	clone(): Observer;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Observer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Observer');
	}
	constructor(direction: BlockFace);
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Observer.$javaClass(...args);
	}
}

