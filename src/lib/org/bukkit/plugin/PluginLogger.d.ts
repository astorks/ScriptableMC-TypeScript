import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface PluginLogger {
    log(logRecord: any): void;
    log(level: any, thrown: any, msgSupplier: any): void;
    log(level: any, msg: string): void;
    log(level: any, msg: string, thrown: any): void;
    log(level: any, msgSupplier: any): void;
    log(level: any, msg: string, param1: any): void;
    log(level: any, msg: string, params: Array<any>): void;
    getName(): string;
    info(msg: string): void;
    info(msgSupplier: any): void;
    getParent(): any;
    setParent(parent: any): void;
    warning(msg: string): void;
    warning(msgSupplier: any): void;
    getFilter(): any;
    config(msg: string): void;
    config(msgSupplier: any): void;
    getResourceBundle(): any;
    getResourceBundleName(): string;
    setFilter(newFilter: any): void;
    logp(level: any, sourceClass: string, sourceMethod: string, msg: string, param1: any): void;
    logp(level: any, sourceClass: string, sourceMethod: string, msgSupplier: any): void;
    logp(level: any, sourceClass: string, sourceMethod: string, msg: string): void;
    logp(level: any, sourceClass: string, sourceMethod: string, msg: string, params: Array<any>): void;
    logp(level: any, sourceClass: string, sourceMethod: string, msg: string, thrown: any): void;
    logp(level: any, sourceClass: string, sourceMethod: string, thrown: any, msgSupplier: any): void;
    setLevel(newLevel: any): void;
    getLevel(): any;
    logrb(level: any, bundle: any, msg: string, thrown: any): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, param1: any): void;
    logrb(level: any, bundle: any, msg: string, params: Array<any>): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundle: any, msg: string, params: Array<any>): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundle: any, msg: string, thrown: any): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, thrown: any): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, params: Array<any>): void;
    logrb(level: any, sourceClass: string, sourceMethod: string, bundleName: string, msg: string): void;
    entering(sourceClass: string, sourceMethod: string, param1: any): void;
    entering(sourceClass: string, sourceMethod: string): void;
    entering(sourceClass: string, sourceMethod: string, params: Array<any>): void;
    exiting(sourceClass: string, sourceMethod: string, result: any): void;
    exiting(sourceClass: string, sourceMethod: string): void;
    throwing(sourceClass: string, sourceMethod: string, thrown: any): void;
    severe(msgSupplier: any): void;
    severe(msg: string): void;
    fine(msg: string): void;
    fine(msgSupplier: any): void;
    finer(msgSupplier: any): void;
    finer(msg: string): void;
    finest(msgSupplier: any): void;
    finest(msg: string): void;
    isLoggable(level: any): boolean;
    addHandler(handler: any): void;
    removeHandler(handler: any): void;
    getHandlers(): Array<any>;
    setUseParentHandlers(useParentHandlers: boolean): void;
    getUseParentHandlers(): boolean;
    setResourceBundle(bundle: any): void;
}
export default class PluginLogger {
    static get $javaClass(): any;
    constructor(context: Plugin);
    static get GLOBAL_LOGGER_NAME(): string;
    static get global(): any;
    static getLogger(_name: string, resourceBundleName: string): any;
    static getLogger(_name: string): any;
    static getGlobal(): any;
    static getAnonymousLogger(): any;
    static getAnonymousLogger(resourceBundleName: string): any;
}
