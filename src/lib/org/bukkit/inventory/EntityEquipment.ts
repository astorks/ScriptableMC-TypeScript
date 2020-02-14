declare var Java: any;
import Entity from '../../../org/bukkit/entity/Entity.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface EntityEquipment {
	getItemInHand(): ItemStack;
	setItemInHand(arg0: ItemStack): void;
	getHolder(): Entity;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setChestplate(arg0: ItemStack): void;
	getLeggings(): ItemStack;
	setLeggings(arg0: ItemStack): void;
	getBoots(): ItemStack;
	setBoots(arg0: ItemStack): void;
	getArmorContents(): Array<ItemStack>;
	setArmorContents(arg0: Array<ItemStack>): void;
	getItemInHandDropChance(): number;
	setItemInHandDropChance(arg0: number): void;
	getItemInMainHandDropChance(): number;
	setItemInMainHandDropChance(arg0: number): void;
	getItemInOffHandDropChance(): number;
	setItemInOffHandDropChance(arg0: number): void;
	getHelmetDropChance(): number;
	setHelmetDropChance(arg0: number): void;
	getChestplateDropChance(): number;
	setChestplateDropChance(arg0: number): void;
	getLeggingsDropChance(): number;
	setLeggingsDropChance(arg0: number): void;
	getBootsDropChance(): number;
	setBootsDropChance(arg0: number): void;
	setItemInMainHand(arg0: ItemStack): void;
	setItemInOffHand(arg0: ItemStack): void;
	getHelmet(): ItemStack;
	setHelmet(arg0: ItemStack): void;
	getChestplate(): ItemStack;
	clear(): void;
}

export default class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

