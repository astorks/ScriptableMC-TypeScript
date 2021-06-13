declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Rails from './Rails.js'

export default interface ExtendedRails extends Rails {
	clone(): Rails;
	clone(): ExtendedRails;
	clone(): any;
	clone(): MaterialData;
	getData(): number;
	getDirection(): BlockFace;
	getItemType(): Material;
	isCurve(): boolean;
	isOnSlope(): boolean;
	setData(data: number): void;
	setDirection(face: BlockFace, isOnSlope: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class ExtendedRails {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.ExtendedRails');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new ExtendedRails.$javaClass(...args);
	}

}

