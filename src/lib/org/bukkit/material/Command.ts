declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'

export default interface Command extends MaterialData, Redstone {
	clone(): Command;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setPowered(bool: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Command {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Command');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Command.$javaClass(...args);
	}

}

