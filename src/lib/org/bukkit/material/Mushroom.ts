declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from './MaterialData.js'
import MushroomBlockTexture from './types/MushroomBlockTexture.js'

export default interface Mushroom extends MaterialData {
	clone(): Mushroom;
	clone(): MaterialData;
	clone(): any;
	getBlockTexture(): MushroomBlockTexture;
	getData(): number;
	getItemType(): Material;
	getPaintedFaces(): any;
	isFacePainted(face: BlockFace): boolean;
	isStem(): boolean;
	setBlockTexture(texture: MushroomBlockTexture): void;
	setData(data: number): void;
	setFacePainted(face: BlockFace, painted: boolean): void;
	setStem(): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class Mushroom {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Mushroom');
	}

	constructor(shroom: Material);
	constructor(shroom: Material, data: number);
	constructor(shroom: Material, texture: MushroomBlockTexture);
	constructor(shroom: Material, capFace: BlockFace);
	constructor(...args: any[]) {
		return new Mushroom.$javaClass(...args);
	}

}

