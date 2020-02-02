export default interface YamlConstructor {
    getData(): any;
    getPropertyUtils(): any;
    addTypeDescription(definition: any): any;
    setPropertyUtils(propertyUtils: any): void;
    checkData(): boolean;
    setComposer(composer: any): void;
    getSingleData(type: any): any;
    isAllowDuplicateKeys(): boolean;
    setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
    isWrappedToRootException(): boolean;
    setWrappedToRootException(wrappedToRootException: boolean): void;
    isExplicitPropertyUtils(): boolean;
}
export default class YamlConstructor {
    static get $javaClass(): any;
    constructor();
    static get undefinedConstructor(): any;
}
