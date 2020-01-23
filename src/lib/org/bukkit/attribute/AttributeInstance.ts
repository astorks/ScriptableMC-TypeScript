declare var Java: any;
import {Attribute} from '../../../org/bukkit/attribute/Attribute.js'
import {AttributeModifier} from '../../../org/bukkit/attribute/AttributeModifier.js'

export interface AttributeInstance {
	getModifiers(): any;
	getValue(): number;
	getDefaultValue(): number;
	getAttribute(): Attribute;
	removeModifier(modifier: AttributeModifier): void;
	setBaseValue(value: number): void;
	addModifier(modifier: AttributeModifier): void;
	getBaseValue(): number;
}

export class AttributeInstance {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.attribute.AttributeInstance');
	}
}

