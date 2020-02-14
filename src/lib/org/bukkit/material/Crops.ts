declare var Java: any;
import CropState from '../../../org/bukkit/CropState.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Crops extends MaterialData {
	setState(state: CropState): void;
	clone(): MaterialData;
	clone(): any;
	clone(): Crops;
	getState(): CropState;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Crops {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Crops');
	}
	constructor(type: Material, state: CropState);
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor();
	constructor(state: CropState);
	constructor(...args: any[]) {
		return new Crops.$javaClass(...args);
	}
}

