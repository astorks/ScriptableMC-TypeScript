export default interface YamlConstructor {
    getData(): any;
    setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
    isExplicitPropertyUtils(): boolean;
    isAllowDuplicateKeys(): boolean;
    isWrappedToRootException(): boolean;
    setWrappedToRootException(wrappedToRootException: boolean): void;
    setPropertyUtils(propertyUtils: any): void;
    addTypeDescription(definition: any): any;
    getPropertyUtils(): any;
    getSingleData(type: any): any;
    setComposer(composer: any): void;
    checkData(): boolean;
}
export default class YamlConstructor {
    static get $javaClass(): any;
    constructor();
    static get undefinedConstructor(): any;
}
