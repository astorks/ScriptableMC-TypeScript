declare var Java: any;
import {ItemStack} from '../../../org/bukkit/inventory/ItemStack.js'
import {Entity} from '../../../org/bukkit/entity/Entity.js'

export interface EntityEquipment {
	clear(): void;
	getItemInHand(): ItemStack;
	setItemInHand(stack: ItemStack): void;
	getHolder(): Entity;
	getBootsDropChance(): number;
	setBootsDropChance(chance: number): void;
	getItemInHandDropChance(): number;
	setItemInHandDropChance(chance: number): void;
	getItemInMainHandDropChance(): number;
	setItemInMainHandDropChance(chance: number): void;
	getItemInOffHandDropChance(): number;
	getLeggingsDropChance(): number;
	setHelmetDropChance(chance: number): void;
	getHelmetDropChance(): number;
	setChestplateDropChance(chance: number): void;
	getChestplateDropChance(): number;
	setLeggingsDropChance(chance: number): void;
	setItemInOffHandDropChance(chance: number): void;
	getChestplate(): ItemStack;
	getArmorContents(): Array<ItemStack>;
	setChestplate(chestplate: ItemStack): void;
	setArmorContents(items: Array<ItemStack>): void;
	setLeggings(leggings: ItemStack): void;
	getItemInMainHand(): ItemStack;
	getItemInOffHand(): ItemStack;
	setBoots(boots: ItemStack): void;
	getLeggings(): ItemStack;
	setItemInMainHand(item: ItemStack): void;
	getHelmet(): ItemStack;
	setHelmet(helmet: ItemStack): void;
	setItemInOffHand(item: ItemStack): void;
	getBoots(): ItemStack;
}

export class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}
}

