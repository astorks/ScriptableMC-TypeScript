declare var Java: any;
import Plugin from '../../../org/bukkit/plugin/Plugin.js'

export default interface PluginLogger {
	addHandler(handler: any): void;
	config(msg: string): void;
	config(msgSupplier: any): void;
	entering(sourceClass: string, sourceMethod: string): void;
	entering(sourceClass: string, sourceMethod: string, params: Array<any>): void;
	entering(sourceClass: string, sourceMethod: string, param1: any): void;
	exiting(sourceClass: string, sourceMethod: string): void;
	exiting(sourceClass: string, sourceMethod: string, result: any): void;
	fine(msg: string): void;
	fine(msgSupplier: any): void;
	finer(msg: string): void;
	finer(msgSupplier: any): void;
	finest(msg: string): void;
	finest(msgSupplier: any): void;
	getFilter(): any;
	getHandlers(): Array<any>;
	getLevel(): any;
	getName(): string;
	getParent(): any;
	getResourceBundle(): any;
	getResourceBundleName(): string;
	getUseParentHandlers(): boolean;
	info(msg: string): void;
	info(msgSupplier: any): void;
	isLoggable(level: any): boolean;
	log(logRecord: any): void;
	log(level: any, msg: string): void;
	log(level: any, msgSupplier: any): void;
	log(level: any, msg: string, thrown: any): void;
	log(level: any, msg: string, params: Array<any>): void;
	log(level: any, thrown: any, msgSupplier: any): void;
	log(level: any, msg: string, param1: any): void;
	logp(level: any, sourceClass: string, sourceMethod: string, msg: string): void;
	logp(level: any, sourceClass: string, sourceMethod: string, msgSupplier: any): void;
	logp(level: any, sourceClass: string, sourceMethod: string, msg: string, param1: any): void;
	logp(level: any, sourceClass: string, sourceMethod: string, thrown: any, msgSupplier: any): void;
	logp(level: any, sourceClass: string, sourceMethod: string, msg: string, thrown: any): void;
	logp(level: any, sourceClass: string, sourceMethod: string, msg: string, params: Array<any>): void;
	logrb(level: any, bundle: any, msg: string, thrown: any): void;
	logrb(level: any, bundle: any, msg: string, params: Array<any>): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundle: any, msg: string, thrown: any): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, param1: any): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundle: any, msg: string, params: Array<any>): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, params: Array<any>): void;
	logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, thrown: any): void;
	removeHandler(handler: any): void;
	setFilter(newFilter: any): void;
	setLevel(newLevel: any): void;
	setParent(parent: any): void;
	setResourceBundle(bundle: any): void;
	setUseParentHandlers(useParentHandlers: boolean): void;
	severe(msgSupplier: any): void;
	severe(msg: string): void;
	throwing(sourceClass: string, sourceMethod: string, thrown: any): void;
	warning(msg: string): void;
	warning(msgSupplier: any): void;
}

export default class PluginLogger {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.plugin.PluginLogger');
	}

	constructor(context: Plugin);
	constructor(...args: any[]) {
		return new PluginLogger.$javaClass(...args);
	}

	public static get GLOBAL_LOGGER_NAME(): string {
		return PluginLogger.$javaClass.GLOBAL_LOGGER_NAME;
	}

	public static get global(): any {
		return PluginLogger.$javaClass.global;
	}

	public static getAnonymousLogger(): any;
	public static getAnonymousLogger(resourceBundleName: string): any;
	public static getAnonymousLogger(...args: any[]): any {
		return PluginLogger.$javaClass.getAnonymousLogger(...args);
	}

	public static getGlobal(): any;
	public static getGlobal(...args: any[]): any {
		return PluginLogger.$javaClass.getGlobal(...args);
	}

	public static getLogger(_name: string): any;
	public static getLogger(_name: string, resourceBundleName: string): any;
	public static getLogger(...args: any[]): any {
		return PluginLogger.$javaClass.getLogger(...args);
	}

}

