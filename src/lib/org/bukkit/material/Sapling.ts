declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from '../../../org/bukkit/material/Wood.js'

export default interface Sapling extends Wood {
	isInstantGrowable(): boolean;
	setIsInstantGrowable(isInstantGrowable: boolean): void;
	clone(): MaterialData;
	clone(): any;
	clone(): Wood;
	clone(): Sapling;
	getSpecies(): TreeSpecies;
	setSpecies(species: TreeSpecies): void;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sapling {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sapling');
	}
	constructor(type: Material, data: number);
	constructor(type: Material, species: TreeSpecies, isInstantGrowable: boolean);
	constructor();
	constructor(species: TreeSpecies);
	constructor(species: TreeSpecies, isInstantGrowable: boolean);
	constructor(type: Material);
	constructor(type: Material, species: TreeSpecies);
	constructor(...args: any[]) {
		return new Sapling.$javaClass(...args);
	}
}

