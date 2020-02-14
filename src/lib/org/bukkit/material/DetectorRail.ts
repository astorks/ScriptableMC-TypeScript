declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ExtendedRails from '../../../org/bukkit/material/ExtendedRails.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import PressureSensor from '../../../org/bukkit/material/PressureSensor.js'
import Rails from '../../../org/bukkit/material/Rails.js'

export default interface DetectorRail extends ExtendedRails, PressureSensor {
	setPressed(isPressed: boolean): void;
	isPressed(): boolean;
	clone(): MaterialData;
	clone(): any;
	clone(): Rails;
	clone(): ExtendedRails;
	clone(): DetectorRail;
	setDirection(face: BlockFace, isOnSlope: boolean): void;
	isCurve(): boolean;
	getDirection(): BlockFace;
	isOnSlope(): boolean;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class DetectorRail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.DetectorRail');
	}
	constructor();
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor(...args: any[]) {
		return new DetectorRail.$javaClass(...args);
	}
}

