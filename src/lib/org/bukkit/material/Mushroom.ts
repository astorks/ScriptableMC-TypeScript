declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MushroomBlockTexture from '../../../org/bukkit/material/types/MushroomBlockTexture.js'

export default interface Mushroom extends MaterialData {
	isStem(): boolean;
	setStem(): void;
	getBlockTexture(): MushroomBlockTexture;
	setBlockTexture(texture: MushroomBlockTexture): void;
	isFacePainted(face: BlockFace): boolean;
	setFacePainted(face: BlockFace, painted: boolean): void;
	getPaintedFaces(): any;
	clone(): MaterialData;
	clone(): any;
	clone(): Mushroom;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
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

