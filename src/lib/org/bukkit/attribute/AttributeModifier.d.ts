import AttributeModifier$Operation from '../../../org/bukkit/attribute/AttributeModifier$Operation.js';
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js';
import EquipmentSlot from '../../../org/bukkit/inventory/EquipmentSlot.js';
export default interface AttributeModifier extends ConfigurationSerializable {
    getAmount(): number;
    serialize(): any;
    getUniqueId(): string;
    getOperation(): AttributeModifier$Operation;
    getName(): string;
    getSlot(): EquipmentSlot;
}
export default class AttributeModifier {
    static get $javaClass(): any;
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
    constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
    constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
    static deserialize(args: any): AttributeModifier;
}
