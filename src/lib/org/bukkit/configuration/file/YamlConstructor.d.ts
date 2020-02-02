export default interface YamlConstructor {
    getData(): any;
    isWrappedToRootException(): boolean;
    setWrappedToRootException(wrappedToRootException: boolean): void;
    setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
    isExplicitPropertyUtils(): boolean;
    isAllowDuplicateKeys(): boolean;
    getPropertyUtils(): any;
    addTypeDescription(definition: any): any;
    setPropertyUtils(propertyUtils: any): void;
    setComposer(composer: any): void;
    getSingleData(type: any): any;
    checkData(): boolean;
}
export default class YamlConstructor {
    static get $javaClass(): any;
    constructor();
    static get undefinedConstructor(): any;
}
