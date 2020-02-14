declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js'

export default interface MonsterEggs extends TexturedMaterial {
	getTextures(): Array<Material>;
	clone(): MaterialData;
	clone(): any;
	clone(): TexturedMaterial;
	clone(): MonsterEggs;
	getMaterial(): Material;
	setMaterial(material: Material): void;
	getData(): number;
	setData(data: number): void;
	getItemType(): Material;
	toItemStack(): ItemStack;
	toItemStack(amount: number): ItemStack;
}

export default class MonsterEggs {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.MonsterEggs');
	}
	constructor(type: Material, data: number);
	constructor(type: Material);
	constructor();
	constructor(...args: any[]) {
		return new MonsterEggs.$javaClass(...args);
	}
}
