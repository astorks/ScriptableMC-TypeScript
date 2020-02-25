declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js'

export default interface SmoothBrick extends TexturedMaterial {
	clone(): MaterialData;
	clone(): any;
	clone(): TexturedMaterial;
	clone(): SmoothBrick;
	getData(): number;
	getItemType(): Material;
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setData(data: number): void;
	setMaterial(material: Material): void;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class SmoothBrick {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.SmoothBrick');
	}

	constructor();
	constructor(type: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new SmoothBrick.$javaClass(...args);
	}

}

