import { Attribute } from '../../../org/bukkit/attribute/Attribute.js';
import { AttributeModifier } from '../../../org/bukkit/attribute/AttributeModifier.js';
export interface AttributeInstance {
    getAttribute(): Attribute;
    getBaseValue(): number;
    setBaseValue(arg0: number): void;
    addModifier(arg0: AttributeModifier): void;
    removeModifier(arg0: AttributeModifier): void;
    getModifiers(): any;
    getValue(): number;
    getDefaultValue(): number;
}
export declare class AttributeInstance {
    static get $javaClass(): any;
}
