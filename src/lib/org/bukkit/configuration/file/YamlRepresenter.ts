declare var Java: any;

export default interface YamlRepresenter {
	getTimeZone(): any;
	setTimeZone(arg0: any): void;
	addClassTag(arg0: any, arg1: any): any;
	addTypeDescription(td: any): any;
	setPropertyUtils(propertyUtils: any): void;
	setDefaultFlowStyle(defaultFlowStyle: any): void;
	getPropertyUtils(): any;
	represent(data: any): any;
	setDefaultScalarStyle(defaultStyle: any): void;
	getDefaultScalarStyle(): any;
	getDefaultFlowStyle(): any;
	isExplicitPropertyUtils(): boolean;
}

export default class YamlRepresenter {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.configuration.file.YamlRepresenter');
	}
	constructor();
	constructor(...args: any[]) {
		return new YamlRepresenter.$javaClass(...args);
	}
}

