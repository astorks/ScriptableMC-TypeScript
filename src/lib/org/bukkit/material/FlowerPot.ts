declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface FlowerPot extends MaterialData {
	clone(): FlowerPot;
	clone(): MaterialData;
	clone(): any;
	getContents(): MaterialData;
	getData(): number;
	getItemType(): Material;
	setContents(materialData: MaterialData): void;
	setData(data: number): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class FlowerPot {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.FlowerPot');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new FlowerPot.$javaClass(...args);
	}

}

