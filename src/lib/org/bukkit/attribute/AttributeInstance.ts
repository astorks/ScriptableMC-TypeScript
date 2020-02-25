declare var Java: any;
import Attribute from '../../../org/bukkit/attribute/Attribute.js'
import AttributeModifier from '../../../org/bukkit/attribute/AttributeModifier.js'

export default interface AttributeInstance {
	addModifier(arg0: AttributeModifier): void;
	getAttribute(): Attribute;
	getBaseValue(): number;
	getDefaultValue(): number;
	getModifiers(): any;
	getValue(): number;
	removeModifier(arg0: AttributeModifier): void;
	setBaseValue(arg0: number): void;
}

export default class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}

}

