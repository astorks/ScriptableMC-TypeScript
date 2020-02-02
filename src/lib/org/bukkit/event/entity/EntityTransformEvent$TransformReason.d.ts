export default interface EntityTransformEvent$TransformReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EntityTransformEvent$TransformReason {
    static get $javaClass(): any;
    static get CURED(): EntityTransformEvent$TransformReason;
    static get INFECTION(): EntityTransformEvent$TransformReason;
    static get DROWNED(): EntityTransformEvent$TransformReason;
    static get SHEARED(): EntityTransformEvent$TransformReason;
    static get LIGHTNING(): EntityTransformEvent$TransformReason;
    static get SPLIT(): EntityTransformEvent$TransformReason;
}
