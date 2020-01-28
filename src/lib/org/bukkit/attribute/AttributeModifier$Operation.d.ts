export interface AttributeModifier$Operation {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class AttributeModifier$Operation {
    static get $javaClass(): any;
    static get ADD_NUMBER(): AttributeModifier$Operation;
    static get ADD_SCALAR(): AttributeModifier$Operation;
    static get MULTIPLY_SCALAR_1(): AttributeModifier$Operation;
}
