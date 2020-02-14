declare var Java: any;

export default interface YamlRepresenter {
	addClassTag(arg0: any, arg1: any): any;
	addTypeDescription(td: any): any;
	getDefaultFlowStyle(): any;
	getDefaultScalarStyle(): any;
	getPropertyUtils(): any;
	getTimeZone(): any;
	isExplicitPropertyUtils(): boolean;
	represent(data: any): any;
	setDefaultFlowStyle(defaultFlowStyle: any): void;
	setDefaultScalarStyle(defaultStyle: any): void;
	setPropertyUtils(propertyUtils: any): void;
	setTimeZone(arg0: any): void;
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

