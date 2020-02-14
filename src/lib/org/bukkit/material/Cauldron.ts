declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Cauldron extends MaterialData {
	isFull(): boolean;
	clone(): MaterialData;
	clone(): Cauldron;
	clone(): any;
	isEmpty(): boolean;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Cauldron {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Cauldron');
	}
	constructor();
	constructor(data: number);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Cauldron.$javaClass(...args);
	}
}

