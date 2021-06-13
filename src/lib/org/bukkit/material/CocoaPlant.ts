declare var Java: any;
import Attachable from './Attachable.js'
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import CocoaPlant$CocoaPlantSize from './CocoaPlant$CocoaPlantSize.js'
import Directional from './Directional.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'

export default interface CocoaPlant extends MaterialData, Directional, Attachable {
	clone(): any;
	clone(): CocoaPlant;
	clone(): MaterialData;
	getAttachedFace(): BlockFace;
	getData(): number;
	getFacing(): BlockFace;
	getItemType(): Material;
	getSize(): CocoaPlant$CocoaPlantSize;
	setData(data: number): void;
	setFacingDirection(face: BlockFace): void;
	setSize(sz: CocoaPlant$CocoaPlantSize): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class CocoaPlant {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.CocoaPlant');
	}

	constructor();
	constructor(sz: CocoaPlant$CocoaPlantSize);
	constructor(sz: CocoaPlant$CocoaPlantSize, dir: BlockFace);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new CocoaPlant.$javaClass(...args);
	}

}

