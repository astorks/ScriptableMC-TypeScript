declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Cake extends MaterialData {
	clone(): any;
	clone(): MaterialData;
	clone(): Cake;
	getData(): number;
	getItemType(): Material;
	getSlicesEaten(): number;
	getSlicesRemaining(): number;
	setData(data: number): void;
	setSlicesEaten(n: number): void;
	setSlicesRemaining(n: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Cake {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Cake');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Cake.$javaClass(...args);
	}

}

