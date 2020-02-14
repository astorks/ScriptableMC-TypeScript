declare var Java: any;
import Attachable from '../../../org/bukkit/material/Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface SimpleAttachableMaterialData extends MaterialData, Attachable {
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	clone(): MaterialData;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	setData(data: number): void;
	setFacingDirection(arg0: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class SimpleAttachableMaterialData {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.SimpleAttachableMaterialData');
	}

	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(type: Material, direction: BlockFace);
	constructor(...args: any[]) {
		return new SimpleAttachableMaterialData.$javaClass(...args);
	}

}

