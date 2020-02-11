import Entity from '../../../org/bukkit/entity/Entity.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface EntityEquipment {
    clear(): void;
    getItemInHand(): ItemStack;
    setItemInHand(arg0: ItemStack): void;
    getHolder(): Entity;
    setChestplateDropChance(arg0: number): void;
    setItemInHandDropChance(arg0: number): void;
    setItemInOffHandDropChance(arg0: number): void;
    getItemInMainHandDropChance(): number;
    getChestplateDropChance(): number;
    setItemInMainHandDropChance(arg0: number): void;
    getHelmetDropChance(): number;
    setLeggingsDropChance(arg0: number): void;
    getItemInOffHandDropChance(): number;
    getItemInHandDropChance(): number;
    setHelmetDropChance(arg0: number): void;
    getLeggingsDropChance(): number;
    setArmorContents(arg0: Array<ItemStack>): void;
    setBootsDropChance(arg0: number): void;
    getArmorContents(): Array<ItemStack>;
    setItemInOffHand(arg0: ItemStack): void;
    setBoots(arg0: ItemStack): void;
    getChestplate(): ItemStack;
    setHelmet(arg0: ItemStack): void;
    setItemInMainHand(arg0: ItemStack): void;
    setLeggings(arg0: ItemStack): void;
    getBoots(): ItemStack;
    getBootsDropChance(): number;
    getItemInMainHand(): ItemStack;
    getItemInOffHand(): ItemStack;
    getHelmet(): ItemStack;
    getLeggings(): ItemStack;
    setChestplate(arg0: ItemStack): void;
}
export default class EntityEquipment {
    static get $javaClass(): any;
}
