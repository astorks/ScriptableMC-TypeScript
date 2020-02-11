export default interface YamlRepresenter {
    getTimeZone(): any;
    setTimeZone(arg0: any): void;
    addClassTag(arg0: any, arg1: any): any;
    setPropertyUtils(propertyUtils: any): void;
    addTypeDescription(td: any): any;
    getDefaultFlowStyle(): any;
    getDefaultScalarStyle(): any;
    isExplicitPropertyUtils(): boolean;
    setDefaultScalarStyle(defaultStyle: any): void;
    represent(data: any): any;
    getPropertyUtils(): any;
    setDefaultFlowStyle(defaultFlowStyle: any): void;
}
export default class YamlRepresenter {
    static get $javaClass(): any;
    constructor();
}
