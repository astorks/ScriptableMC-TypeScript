declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from '../../../org/bukkit/material/Wood.js'

export default interface Leaves extends Wood {
	clone(): any;
	clone(): MaterialData;
	clone(): Wood;
	clone(): Leaves;
	getData(): number;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	isDecayable(): boolean;
	isDecaying(): boolean;
	setData(data: number): void;
	setDecayable(isDecayable: boolean): void;
	setDecaying(isDecaying: boolean): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Leaves');
	}

	constructor();
	constructor(type: Material);
	constructor(species: TreeSpecies);
	constructor(type: Material, data: number);
	constructor(type: Material, species: TreeSpecies);
	constructor(species: TreeSpecies, isDecayable: boolean);
	constructor(type: Material, species: TreeSpecies, isDecayable: boolean);
	constructor(...args: any[]) {
		return new Leaves.$javaClass(...args);
	}

}

