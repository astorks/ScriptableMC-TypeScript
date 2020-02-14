declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'

export default interface TexturedMaterial extends MaterialData {
	getMaterial(): Material;
	getTextures(): Array<Material>;
	setMaterial(material: Material): void;
	clone(): MaterialData;
	clone(): any;
	clone(): TexturedMaterial;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class TexturedMaterial {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.TexturedMaterial');
	}
	constructor(m: Material);
	constructor(type: Material, data: number);
	constructor(...args: any[]) {
		return new TexturedMaterial.$javaClass(...args);
	}
}

