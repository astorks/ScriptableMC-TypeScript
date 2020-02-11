export default interface Mirror {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Mirror {
    static get $javaClass(): any;
    static get NONE(): Mirror;
    static get LEFT_RIGHT(): Mirror;
    static get FRONT_BACK(): Mirror;
}
