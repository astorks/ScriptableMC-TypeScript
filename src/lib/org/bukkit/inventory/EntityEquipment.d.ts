import Entity from '../../../org/bukkit/entity/Entity.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
export default interface EntityEquipment {
    clear(): void;
    setItemInHand(arg0: ItemStack): void;
    getItemInHand(): ItemStack;
    getHolder(): Entity;
    getLeggingsDropChance(): number;
    getItemInHandDropChance(): number;
    getItemInOffHandDropChance(): number;
    getItemInMainHandDropChance(): number;
    setItemInMainHandDropChance(arg0: number): void;
    getChestplateDropChance(): number;
    setChestplateDropChance(arg0: number): void;
    setItemInHandDropChance(arg0: number): void;
    setHelmetDropChance(arg0: number): void;
    getHelmetDropChance(): number;
    setItemInOffHandDropChance(arg0: number): void;
    setLeggingsDropChance(arg0: number): void;
    getItemInOffHand(): ItemStack;
    getChestplate(): ItemStack;
    setLeggings(arg0: ItemStack): void;
    setBootsDropChance(arg0: number): void;
    getBootsDropChance(): number;
    getLeggings(): ItemStack;
    setChestplate(arg0: ItemStack): void;
    setItemInMainHand(arg0: ItemStack): void;
    getItemInMainHand(): ItemStack;
    getBoots(): ItemStack;
    setArmorContents(arg0: Array<ItemStack>): void;
    getArmorContents(): Array<ItemStack>;
    setBoots(arg0: ItemStack): void;
    setItemInOffHand(arg0: ItemStack): void;
    getHelmet(): ItemStack;
    setHelmet(arg0: ItemStack): void;
}
export default class EntityEquipment {
    static get $javaClass(): any;
}
