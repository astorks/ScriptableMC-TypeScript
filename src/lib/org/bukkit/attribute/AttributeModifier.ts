declare var Java: any;
import AttributeModifier$Operation from '../../../org/bukkit/attribute/AttributeModifier$Operation.js'
import ConfigurationSerializable from '../../../org/bukkit/configuration/serialization/ConfigurationSerializable.js'
import EquipmentSlot from '../../../org/bukkit/inventory/EquipmentSlot.js'

export default interface AttributeModifier extends ConfigurationSerializable {
	getAmount(): number;
	getName(): string;
	getOperation(): AttributeModifier$Operation;
	getSlot(): EquipmentSlot;
	getUniqueId(): string;
	serialize(): any;
}

export default class AttributeModifier {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeModifier');
	}

	constructor(_name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation);
	constructor(uuid: string, _name: string, amount: number, operation: AttributeModifier$Operation, slot: EquipmentSlot);
	constructor(...args: any[]) {
		return new AttributeModifier.$javaClass(...args);
	}

	public static deserialize(args: any): AttributeModifier;
	public static deserialize(...args: any[]): any {
		return AttributeModifier.$javaClass.deserialize(...args);
	}

}

