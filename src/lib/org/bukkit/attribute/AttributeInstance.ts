declare var Java: any;
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../org/bukkit/attribute/AttributeModifier.js'

export interface AttributeInstance {
	getAttribute(): Attribute;
	setBaseValue(arg0: number): void;
	addModifier(arg0: AttributeModifier): void;
	removeModifier(arg0: AttributeModifier): void;
	getBaseValue(): number;
	getModifiers(): any;
	getValue(): number;
	getDefaultValue(): number;
}

export class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}
}

