declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Cake extends MaterialData {
	getSlicesEaten(): number;
	setSlicesEaten(n: number): void;
	getSlicesRemaining(): number;
	setSlicesRemaining(n: number): void;
	clone(): any;
	clone(): MaterialData;
	clone(): Cake;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Cake {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Cake');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new Cake.$javaClass(...args);
	}
}

