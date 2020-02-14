declare var Java: any;

export default interface YamlConstructor {
	addTypeDescription(definition: any): any;
	checkData(): boolean;
	getData(): any;
	getPropertyUtils(): any;
	getSingleData(type: any): any;
	isAllowDuplicateKeys(): boolean;
	isExplicitPropertyUtils(): boolean;
	isWrappedToRootException(): boolean;
	setAllowDuplicateKeys(allowDuplicateKeys: boolean): void;
	setComposer(composer: any): void;
	setPropertyUtils(propertyUtils: any): void;
	setWrappedToRootException(wrappedToRootException: boolean): void;
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

