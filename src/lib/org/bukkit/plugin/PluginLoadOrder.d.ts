export interface PluginLoadOrder {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class PluginLoadOrder {
    static get $javaClass(): any;
    static get STARTUP(): PluginLoadOrder;
    static get POSTWORLD(): PluginLoadOrder;
}
