export default interface PluginChannelDirection {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PluginChannelDirection {
    static get $javaClass(): any;
    static get INCOMING(): PluginChannelDirection;
    static get OUTGOING(): PluginChannelDirection;
}
