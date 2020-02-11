import Attribute from '../../../org/bukkit/attribute/Attribute.js';
import AttributeModifier from '../../../org/bukkit/attribute/AttributeModifier.js';
export default interface AttributeInstance {
    getModifiers(): any;
    getValue(): number;
    getDefaultValue(): number;
    getAttribute(): Attribute;
    addModifier(arg0: AttributeModifier): void;
    setBaseValue(arg0: number): void;
    removeModifier(arg0: AttributeModifier): void;
    getBaseValue(): number;
}
export default class AttributeInstance {
    static get $javaClass(): any;
}
