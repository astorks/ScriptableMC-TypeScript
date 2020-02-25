declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ExtendedRails from '../../../org/bukkit/material/ExtendedRails.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import Rails from '../../../org/bukkit/material/Rails.js'
import Redstone from '../../../org/bukkit/material/Redstone.js'

export default interface PoweredRail extends ExtendedRails, Redstone {
	clone(): MaterialData;
	clone(): any;
	clone(): Rails;
	clone(): ExtendedRails;
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

