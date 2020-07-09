declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import Redstone from './Redstone.js'
import SimpleAttachableMaterialData from './SimpleAttachableMaterialData.js'

export default interface Button extends SimpleAttachableMaterialData, Redstone {
	clone(): MaterialData;
	clone(): any;
	clone(): SimpleAttachableMaterialData;
	clone(): Button;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isPowered(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setPowered(bool: boolean): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Button {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Button');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Button.$javaClass(...args);
	}

}

