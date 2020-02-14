declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'

export default interface Wood extends MaterialData {
	getSpecies(): TreeSpecies;
	setSpecies(species: TreeSpecies): void;
	clone(): Wood;
	clone(): MaterialData;
	clone(): any;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Wood {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Wood');
	}
	constructor();
	constructor(species: TreeSpecies);
	constructor(type: Material);
	constructor(type: Material, species: TreeSpecies);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Wood.$javaClass(...args);
	}
}

