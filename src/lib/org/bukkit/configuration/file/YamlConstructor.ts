declare var Java: any;

export default interface YamlConstructor {
	getData(): any;
	addTypeDescription(definition: any): any;
	setPropertyUtils(propertyUtils: any): void;
	getPropertyUtils(): any;
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
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlConstructor');
	}
	constructor();
	constructor(...args: any[]) {
		return new YamlConstructor.$javaClass(...args);
	}
	public static get undefinedConstructor(): any {
		return YamlConstructor.$javaClass.undefinedConstructor;
	}
}

