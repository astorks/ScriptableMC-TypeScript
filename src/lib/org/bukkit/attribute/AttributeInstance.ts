declare var Java: any;
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../org/bukkit/attribute/AttributeModifier.js'

export interface AttributeInstance {
	getModifiers(): any;
	getValue(): number;
	getDefaultValue(): number;
	getAttribute(): Attribute;
	getBaseValue(): number;
	addModifier(modifier: AttributeModifier): void;
	removeModifier(modifier: AttributeModifier): void;
	setBaseValue(value: number): void;
}

export class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}
}

