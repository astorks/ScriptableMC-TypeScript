declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from './Wood.js'

export default interface Sapling extends Wood {
	clone(): MaterialData;
	clone(): any;
	clone(): Wood;
	clone(): Sapling;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	isInstantGrowable(): boolean;
	setData(data: number): void;
	setIsInstantGrowable(isInstantGrowable: boolean): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Sapling {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Sapling');
	}

	constructor();
	constructor(species: TreeSpecies);
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(species: TreeSpecies, isInstantGrowable: boolean);
	constructor(type: Material, species: TreeSpecies);
	constructor(type: Material, species: TreeSpecies, isInstantGrowable: boolean);
	constructor(...args: any[]) {
		return new Sapling.$javaClass(...args);
	}

}

