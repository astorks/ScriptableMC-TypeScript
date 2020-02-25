declare var Java: any;
import Attachable from '../../../org/bukkit/material/Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface Banner extends MaterialData, Attachable {
	clone(): MaterialData;
	clone(): any;
	clone(): Banner;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	isWallBanner(): boolean;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Banner {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Banner');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new Banner.$javaClass(...args);
	}

}

