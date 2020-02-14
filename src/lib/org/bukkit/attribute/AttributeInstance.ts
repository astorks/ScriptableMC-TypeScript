declare var Java: any;
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../org/bukkit/attribute/AttributeModifier.js'

export default interface AttributeInstance {
	getAttribute(): Attribute;
	removeModifier(arg0: AttributeModifier): void;
	getBaseValue(): number;
	addModifier(arg0: AttributeModifier): void;
	setBaseValue(arg0: number): void;
	getModifiers(): any;
	getValue(): number;
	getDefaultValue(): number;
}

export default class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}
}

