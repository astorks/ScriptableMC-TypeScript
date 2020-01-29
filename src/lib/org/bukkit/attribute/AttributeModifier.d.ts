import { EquipmentSlot } from '../../../org/bukkit/inventory/EquipmentSlot.js';
import { AttributeModifier$Operation } from '../../../org/bukkit/attribute/AttributeModifier$Operation.js';
import { ConfigurationSerializable } from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
export interface AttributeModifier extends ConfigurationSerializable {
    getName(): string;
    getSlot(): EquipmentSlot;
    getUniqueId(): string;
    serialize(): any;
    getAmount(): number;
    getOperation(): AttributeModifier$Operation;
}
export declare class AttributeModifier {
    static get $javaClass(): any;
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
    constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
    static deserialize(args: any): AttributeModifier;
}
