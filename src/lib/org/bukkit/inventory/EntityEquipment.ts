declare var Java: any;
import Entity from '../../../org/bukkit/entity/Entity.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'

export default interface EntityEquipment {
	clear(): void;
	getArmorContents(): Array<ItemStack>;
	getBoots(): ItemStack;
	getBootsDropChance(): number;
	getChestplate(): ItemStack;
	getChestplateDropChance(): number;
	getHelmet(): ItemStack;
	getHelmetDropChance(): number;
	getHolder(): Entity;
	getItemInHand(): ItemStack;
	getItemInHandDropChance(): number;
	getItemInMainHand(): ItemStack;
	getItemInMainHandDropChance(): number;
	getItemInOffHand(): ItemStack;
	getItemInOffHandDropChance(): number;
	getLeggings(): ItemStack;
	getLeggingsDropChance(): number;
	setArmorContents(arg0: Array<ItemStack>): void;
	setBoots(arg0: ItemStack): void;
	setBootsDropChance(arg0: number): void;
	setChestplate(arg0: ItemStack): void;
	setChestplateDropChance(arg0: number): void;
	setHelmet(arg0: ItemStack): void;
	setHelmetDropChance(arg0: number): void;
	setItemInHand(arg0: ItemStack): void;
	setItemInHandDropChance(arg0: number): void;
	setItemInMainHand(arg0: ItemStack): void;
	setItemInMainHandDropChance(arg0: number): void;
	setItemInOffHand(arg0: ItemStack): void;
	setItemInOffHandDropChance(arg0: number): void;
	setLeggings(arg0: ItemStack): void;
	setLeggingsDropChance(arg0: number): void;
}

export default class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}

}

