import { ItemStack } from '../../../org/bukkit/inventory/ItemStack.js';
import { Entity } from '../../../org/bukkit/entity/Entity.js';
export interface EntityEquipment {
    clear(): void;
    getItemInHand(): ItemStack;
    setItemInHand(arg0: ItemStack): void;
    getHolder(): Entity;
    setItemInMainHandDropChance(arg0: number): void;
    getChestplateDropChance(): number;
    setHelmetDropChance(arg0: number): void;
    getItemInHandDropChance(): number;
    getItemInMainHandDropChance(): number;
    setChestplateDropChance(arg0: number): void;
    getLeggingsDropChance(): number;
    getHelmetDropChance(): number;
    getItemInOffHandDropChance(): number;
    setLeggingsDropChance(arg0: number): void;
    setItemInHandDropChance(arg0: number): void;
    setItemInOffHandDropChance(arg0: number): void;
    getBoots(): ItemStack;
    setHelmet(arg0: ItemStack): void;
    getItemInMainHand(): ItemStack;
    getItemInOffHand(): ItemStack;
    setItemInOffHand(arg0: ItemStack): void;
    setChestplate(arg0: ItemStack): void;
    getLeggings(): ItemStack;
    setLeggings(arg0: ItemStack): void;
    getArmorContents(): Array<ItemStack>;
    setArmorContents(arg0: Array<ItemStack>): void;
    getHelmet(): ItemStack;
    setBootsDropChance(arg0: number): void;
    getChestplate(): ItemStack;
    setBoots(arg0: ItemStack): void;
    getBootsDropChance(): number;
    setItemInMainHand(arg0: ItemStack): void;
}
export declare class EntityEquipment {
    static get $javaClass(): any;
}
