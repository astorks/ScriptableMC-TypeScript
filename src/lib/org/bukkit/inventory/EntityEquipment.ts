declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'

export interface EntityEquipment {
	getItemInHand(): ItemStack;
	setItemInHand(arg0: ItemStack): void;
	getHolder(): Entity;
	getItemInMainHand(): ItemStack;
	getArmorContents(): Array<ItemStack>;
	getHelmet(): ItemStack;
	getChestplate(): ItemStack;
	getLeggings(): ItemStack;
	getBoots(): ItemStack;
	setArmorContents(arg0: Array<ItemStack>): void;
	setHelmet(arg0: ItemStack): void;
	setChestplate(arg0: ItemStack): void;
	setLeggings(arg0: ItemStack): void;
	setBoots(arg0: ItemStack): void;
	setItemInMainHand(arg0: ItemStack): void;
	getItemInOffHand(): ItemStack;
	setItemInOffHand(arg0: ItemStack): void;
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
	clear(): void;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

