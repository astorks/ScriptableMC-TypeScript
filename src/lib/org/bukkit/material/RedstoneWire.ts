declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface RedstoneWire extends MaterialData, Redstone {
	isPowered(): boolean;
	clone(): RedstoneWire;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class RedstoneWire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.RedstoneWire');
	}
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor();
	constructor(...args: any[]) {
		return new RedstoneWire.$javaClass(...args);
	}
}

