declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'
import Wood from './Wood.js'

export default interface Tree extends Wood {
	clone(): Tree;
	clone(): any;
	clone(): Wood;
	clone(): MaterialData;
	getData(): number;
	getDirection(): BlockFace;
	getItemType(): Material;
	getSpecies(): TreeSpecies;
	setData(data: number): void;
	setDirection(dir: BlockFace): void;
	setSpecies(species: TreeSpecies): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Tree {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Tree');
	}

	constructor();
	constructor(type: Material);
	constructor(species: TreeSpecies);
	constructor(species: TreeSpecies, dir: BlockFace);
	constructor(type: Material, species: TreeSpecies);
	constructor(type: Material, data: number);
	constructor(type: Material, species: TreeSpecies, dir: BlockFace);
	constructor(...args: any[]) {
		return new Tree.$javaClass(...args);
	}

}

