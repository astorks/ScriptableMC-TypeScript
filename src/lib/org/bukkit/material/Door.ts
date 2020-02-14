declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../org/bukkit/material/Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Openable from '../../../org/bukkit/material/Openable.js'
import TreeSpecies from '../../../org/bukkit/TreeSpecies.js'

export default interface Door extends MaterialData, Directional, Openable {
	getFacing(): BlockFace;
	setFacingDirection(face: BlockFace): void;
	setOpen(isOpen: boolean): void;
	setTopHalf(isTopHalf: boolean): void;
	setHinge(isHingeRight: boolean): void;
	isTopHalf(): boolean;
	getHingeCorner(): BlockFace;
	getHinge(): boolean;
	clone(): Door;
	clone(): any;
	clone(): MaterialData;
	isOpen(): boolean;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Door {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Door');
	}
	constructor(type: Material, isHingeRight: boolean);
	constructor(type: Material, face: BlockFace, isOpen: boolean);
	constructor();
	constructor(type: Material, face: BlockFace);
	constructor(type: Material);
	constructor(species: TreeSpecies, isHingeRight: boolean);
	constructor(species: TreeSpecies, face: BlockFace, isOpen: boolean);
	constructor(species: TreeSpecies, face: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Door.$javaClass(...args);
	}
	public static getWoodDoorOfSpecies(species: TreeSpecies): Material;
	public static getWoodDoorOfSpecies(...args: any[]): any {
		return Door.$javaClass.getWoodDoorOfSpecies(...args);
	}
}

