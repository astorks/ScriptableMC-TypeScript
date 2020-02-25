declare var Java: any;
import CropState from '../../../org/bukkit/CropState.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Crops extends MaterialData {
	clone(): Crops;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	getItemType(): Material;
	getState(): CropState;
	setData(data: number): void;
	setState(state: CropState): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Crops {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Crops');
	}

	constructor();
	constructor(type: Material);
	constructor(state: CropState);
	constructor(type: Material, state: CropState);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Crops.$javaClass(...args);
	}

}

