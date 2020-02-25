declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Openable from '../../../org/bukkit/material/Openable.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'

export default interface Door extends MaterialData, Directional, Openable {
	clone(): MaterialData;
	clone(): Door;
	clone(): any;
	getData(): number;
	getFacing(): BlockFace;
	getHinge(): boolean;
	getHingeCorner(): BlockFace;
	getItemType(): Material;
	isOpen(): boolean;
	isTopHalf(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setHinge(isHingeRight: boolean): void;
	setOpen(isOpen: boolean): void;
	setTopHalf(isTopHalf: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Door {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Door');
	}

	constructor();
	constructor(type: Material);
	constructor(species: TreeSpecies, face: BlockFace);
	constructor(type: Material, face: BlockFace);
	constructor(type: Material, isHingeRight: boolean);
	constructor(type: Material, data: number);
	constructor(species: TreeSpecies, isHingeRight: boolean);
	constructor(type: Material, face: BlockFace, isOpen: boolean);
	constructor(species: TreeSpecies, face: BlockFace, isOpen: boolean);
	constructor(...args: any[]) {
		return new Door.$javaClass(...args);
	}

	public static getWoodDoorOfSpecies(species: TreeSpecies): Material;
	public static getWoodDoorOfSpecies(...args: any[]): any {
		return Door.$javaClass.getWoodDoorOfSpecies(...args);
	}

}

