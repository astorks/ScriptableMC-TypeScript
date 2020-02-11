export default interface YamlRepresenter {
    getTimeZone(): any;
    setTimeZone(arg0: any): void;
    addClassTag(arg0: any, arg1: any): any;
    setPropertyUtils(propertyUtils: any): void;
    addTypeDescription(td: any): any;
    getPropertyUtils(): any;
    represent(data: any): any;
    setDefaultFlowStyle(defaultFlowStyle: any): void;
    setDefaultScalarStyle(defaultStyle: any): void;
    getDefaultScalarStyle(): any;
    getDefaultFlowStyle(): any;
    isExplicitPropertyUtils(): boolean;
}
export default class YamlRepresenter {
    static get $javaClass(): any;
    constructor();
}
