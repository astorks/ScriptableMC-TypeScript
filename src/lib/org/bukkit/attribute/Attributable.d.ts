import { AttributeInstance } from '../../../org/bukkit/attribute/AttributeInstance.js';
import { Attribute } from '../../../org/bukkit/attribute/Attribute.js';
export interface Attributable {
    getAttribute(arg0: Attribute): AttributeInstance;
}
export declare class Attributable {
    static get $javaClass(): any;
}
