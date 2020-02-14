declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface Command extends MaterialData, Redstone {
	isPowered(): boolean;
	setPowered(bool: boolean): void;
	clone(): any;
	clone(): MaterialData;
	clone(): Command;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Command');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Command.$javaClass(...args);
	}
}

