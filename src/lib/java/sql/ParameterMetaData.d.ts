export default interface ParameterMetaData {
    getParameterCount(): number;
    isSigned(arg0: number): boolean;
    getScale(arg0: number): number;
    isNullable(arg0: number): number;
    getPrecision(arg0: number): number;
    getParameterMode(arg0: number): number;
    getParameterType(arg0: number): number;
    getParameterClassName(arg0: number): string;
    getParameterTypeName(arg0: number): string;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class ParameterMetaData {
    static get $javaClass(): any;
    static get parameterNoNulls(): number;
    static get parameterNullable(): number;
    static get parameterNullableUnknown(): number;
    static get parameterModeUnknown(): number;
    static get parameterModeIn(): number;
    static get parameterModeInOut(): number;
    static get parameterModeOut(): number;
}
