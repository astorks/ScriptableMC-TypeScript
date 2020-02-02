export default interface YamlRepresenter {
    getTimeZone(): any;
    setTimeZone(arg0: any): void;
    addClassTag(arg0: any, arg1: any): any;
    addTypeDescription(td: any): any;
    setPropertyUtils(propertyUtils: any): void;
    setDefaultFlowStyle(defaultFlowStyle: any): void;
    getDefaultScalarStyle(): any;
    isExplicitPropertyUtils(): boolean;
    setDefaultScalarStyle(defaultStyle: any): void;
    getDefaultFlowStyle(): any;
    getPropertyUtils(): any;
    represent(data: any): any;
}
export default class YamlRepresenter {
    static get $javaClass(): any;
    constructor();
}
