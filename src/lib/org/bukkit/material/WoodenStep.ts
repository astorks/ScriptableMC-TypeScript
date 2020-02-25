declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from '../../../org/bukkit/material/Wood.js'

export default interface WoodenStep extends Wood {
	clone(): MaterialData;
	clone(): any;
	clone(): Wood;
	clone(): WoodenStep;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	isInverted(): boolean;
	setData(data: number): void;
	setInverted(inv: boolean): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class WoodenStep {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.WoodenStep');
	}

	constructor();
	constructor(species: TreeSpecies);
	constructor(species: TreeSpecies, inv: boolean);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new WoodenStep.$javaClass(...args);
	}

}

