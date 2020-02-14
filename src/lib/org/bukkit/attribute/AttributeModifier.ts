declare var Java: any;
import AttributeModifier$Operation from '../../../org/bukkit/attribute/AttributeModifier$Operation.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import EquipmentSlot from '../../../org/bukkit/inventory/EquipmentSlot.js'

export default interface AttributeModifier extends ConfigurationSerializable {
	getUniqueId(): string;
	serialize(): any;
	getAmount(): number;
	getOperation(): AttributeModifier$Operation;
	getName(): string;
	getSlot(): EquipmentSlot;
}

export default class AttributeModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier');
	}
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
	constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(...args: any[]) {
		return new AttributeModifier.$javaClass(...args);
	}
	public static deserialize(args: any): AttributeModifier;
	public static deserialize(...args: any[]): any {
		return AttributeModifier.$javaClass.deserialize(...args);
	}
}

