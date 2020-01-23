declare var Java: any;
import {Entity} from '../../../org/bukkit/entity/Entity.js'
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'

export interface EntityEquipment {
	clear(): void;
	getHolder(): Entity;
	getItemInHandDropChance(): number;
	setItemInHandDropChance(chance: number): void;
	getItemInMainHandDropChance(): number;
	setItemInMainHandDropChance(chance: number): void;
	getItemInOffHandDropChance(): number;
	setItemInOffHandDropChance(chance: number): void;
	getHelmetDropChance(): number;
	setHelmetDropChance(chance: number): void;
	getChestplateDropChance(): number;
	setChestplateDropChance(chance: number): void;
	setLeggingsDropChance(chance: number): void;
	getLeggingsDropChance(): number;
	setItemInHand(stack: ItemStack): void;
	getItemInHand(): ItemStack;
	getItemInMainHand(): ItemStack;
	setItemInMainHand(item: ItemStack): void;
	setItemInOffHand(item: ItemStack): void;
	setHelmet(helmet: ItemStack): void;
	getChestplate(): ItemStack;
	setChestplate(chestplate: ItemStack): void;
	getHelmet(): ItemStack;
	setLeggings(leggings: ItemStack): void;
	getLeggings(): ItemStack;
	getItemInOffHand(): ItemStack;
	getBoots(): ItemStack;
	setBoots(boots: ItemStack): void;
	getBootsDropChance(): number;
	setBootsDropChance(chance: number): void;
	getArmorContents(): Array<ItemStack>;
	setArmorContents(items: Array<ItemStack>): void;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

