declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Openable from './Openable.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'

export default interface TrapDoor extends SimpleAttachableMaterialData, Openable {
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	clone(): MaterialData;
	clone(): TrapDoor;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isInverted(): boolean;
	isOpen(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setInverted(inv: boolean): void;
	setOpen(isOpen: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class TrapDoor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.TrapDoor');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new TrapDoor.$javaClass(...args);
	}

}

