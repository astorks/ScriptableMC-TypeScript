declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ExtendedRails from './ExtendedRails.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Rails from './Rails.js'
import Redstone from './Redstone.js'

export default interface PoweredRail extends ExtendedRails, Redstone {
	clone(): ExtendedRails;
	clone(): any;
	clone(): MaterialData;
	clone(): Rails;
	clone(): PoweredRail;
	getData(): number;
	getDirection(): BlockFace;
	getItemType(): Material;
	isCurve(): boolean;
	isOnSlope(): boolean;
	isPowered(): boolean;
	setData(data: number): void;
	setDirection(face: BlockFace, isOnSlope: boolean): void;
	setPowered(isPowered: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class PoweredRail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.PoweredRail');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new PoweredRail.$javaClass(...args);
	}

}

