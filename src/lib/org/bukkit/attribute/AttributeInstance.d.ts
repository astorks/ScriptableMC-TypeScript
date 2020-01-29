import { Attribute } from '../../../org/bukkit/attribute/Attribute.js';
import { AttributeModifier } from '../../../org/bukkit/attribute/AttributeModifier.js';
export interface AttributeInstance {
    getModifiers(): any;
    getValue(): number;
    getDefaultValue(): number;
    getAttribute(): Attribute;
    getBaseValue(): number;
    addModifier(arg0: AttributeModifier): void;
    removeModifier(arg0: AttributeModifier): void;
    setBaseValue(arg0: number): void;
}
export declare class AttributeInstance {
    static get $javaClass(): any;
}
