import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../org/bukkit/attribute/AttributeModifier.js';
export default interface AttributeInstance {
    getAttribute(): Attribute;
    setBaseValue(arg0: number): void;
    addModifier(arg0: AttributeModifier): void;
    removeModifier(arg0: AttributeModifier): void;
    getBaseValue(): number;
    getModifiers(): any;
    getValue(): number;
    getDefaultValue(): number;
}
export default class AttributeInstance {
    static get $javaClass(): any;
}
