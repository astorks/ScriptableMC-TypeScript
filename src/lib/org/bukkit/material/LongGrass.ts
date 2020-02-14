declare var Java: any;
import GrassSpecies from '../../../org/bukkit/GrassSpecies.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface LongGrass extends MaterialData {
	getSpecies(): GrassSpecies;
	setSpecies(species: GrassSpecies): void;
	clone(): any;
	clone(): MaterialData;
	clone(): LongGrass;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class LongGrass {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.LongGrass');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(species: GrassSpecies);
	constructor(...args: any[]) {
		return new LongGrass.$javaClass(...args);
	}
}

