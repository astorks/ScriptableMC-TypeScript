export default interface YamlConstructor {
    getData(): any;
    getPropertyUtils(): any;
    setPropertyUtils(propertyUtils: any): void;
    addTypeDescription(definition: any): any;
    setComposer(composer: any): void;
    getSingleData(type: any): any;
    checkData(): boolean;
    setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
    isAllowDuplicateKeys(): boolean;
    setWrappedToRootException(wrappedToRootException: boolean): void;
    isWrappedToRootException(): boolean;
    isExplicitPropertyUtils(): boolean;
}
export default class YamlConstructor {
    static get $javaClass(): any;
    constructor();
    static get undefinedConstructor(): any;
}
