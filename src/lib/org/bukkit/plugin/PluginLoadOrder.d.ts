export default interface PluginLoadOrder {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PluginLoadOrder {
    static get $javaClass(): any;
    static get STARTUP(): PluginLoadOrder;
    static get POSTWORLD(): PluginLoadOrder;
}