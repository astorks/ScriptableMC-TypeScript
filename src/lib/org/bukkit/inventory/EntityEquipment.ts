declare var Java: any;
import Entity from '../../../org/bukkit/entity/Entity.js'
import EquipmentSlot from './EquipmentSlot.js'
import ItemStack from './ItemStack.js'

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
	getItem(arg0: EquipmentSlot): ItemStack;
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
	setBoots(arg0: ItemStack, arg1: boolean): void;
	setBootsDropChance(arg0: number): void;
	setChestplate(arg0: ItemStack): void;
	setChestplate(arg0: ItemStack, arg1: boolean): void;
	setChestplateDropChance(arg0: number): void;
	setHelmet(arg0: ItemStack): void;
	setHelmet(arg0: ItemStack, arg1: boolean): void;
	setHelmetDropChance(arg0: number): void;
	setItem(arg0: EquipmentSlot, arg1: ItemStack): void;
	setItem(arg0: EquipmentSlot, arg1: ItemStack, arg2: boolean): void;
	setItemInHand(arg0: ItemStack): void;
	setItemInHandDropChance(arg0: number): void;
	setItemInMainHand(arg0: ItemStack): void;
	setItemInMainHand(arg0: ItemStack, arg1: boolean): void;
	setItemInMainHandDropChance(arg0: number): void;
	setItemInOffHand(arg0: ItemStack): void;
	setItemInOffHand(arg0: ItemStack, arg1: boolean): void;
	setItemInOffHandDropChance(arg0: number): void;
	setLeggings(arg0: ItemStack): void;
	setLeggings(arg0: ItemStack, arg1: boolean): void;
	setLeggingsDropChance(arg0: number): void;
}

export default class EntityEquipment {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.EntityEquipment');
	}

}

