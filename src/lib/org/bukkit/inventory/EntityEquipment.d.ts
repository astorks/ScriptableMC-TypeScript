import Entity from '../../../org/bukkit/entity/Entity.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface EntityEquipment {
    clear(): void;
    setItemInHand(arg0: ItemStack): void;
    getItemInHand(): ItemStack;
    getHolder(): Entity;
    getItemInOffHandDropChance(): number;
    getItemInMainHandDropChance(): number;
    getHelmetDropChance(): number;
    setItemInOffHandDropChance(arg0: number): void;
    setHelmetDropChance(arg0: number): void;
    setItemInHandDropChance(arg0: number): void;
    getItemInHandDropChance(): number;
    setChestplateDropChance(arg0: number): void;
    setItemInMainHandDropChance(arg0: number): void;
    getLeggingsDropChance(): number;
    setLeggingsDropChance(arg0: number): void;
    getChestplateDropChance(): number;
    getHelmet(): ItemStack;
    getChestplate(): ItemStack;
    setChestplate(arg0: ItemStack): void;
    getLeggings(): ItemStack;
    setLeggings(arg0: ItemStack): void;
    setHelmet(arg0: ItemStack): void;
    getItemInMainHand(): ItemStack;
    setItemInMainHand(arg0: ItemStack): void;
    getItemInOffHand(): ItemStack;
    setItemInOffHand(arg0: ItemStack): void;
    getBootsDropChance(): number;
    getArmorContents(): Array<ItemStack>;
    setArmorContents(arg0: Array<ItemStack>): void;
    getBoots(): ItemStack;
    setBootsDropChance(arg0: number): void;
    setBoots(arg0: ItemStack): void;
}
export default class EntityEquipment {
    static get $javaClass(): any;
}
