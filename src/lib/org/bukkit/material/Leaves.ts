declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from '../../../org/bukkit/material/Wood.js'

export default interface Leaves extends Wood {
	isDecayable(): boolean;
	setDecayable(isDecayable: boolean): void;
	isDecaying(): boolean;
	setDecaying(isDecaying: boolean): void;
	clone(): any;
	clone(): MaterialData;
	clone(): Wood;
	clone(): Leaves;
	getSpecies(): TreeSpecies;
	setSpecies(species: TreeSpecies): void;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Leaves');
	}
	constructor(type: Material, data: number);
	constructor();
	constructor(type: Material, species: TreeSpecies);
	constructor(species: TreeSpecies, isDecayable: boolean);
	constructor(type: Material);
	constructor(species: TreeSpecies);
	constructor(type: Material, species: TreeSpecies, isDecayable: boolean);
	constructor(...args: any[]) {
		return new Leaves.$javaClass(...args);
	}
}

