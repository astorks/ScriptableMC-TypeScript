export default interface MainHand {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class MainHand {
    static get $javaClass(): any;
    static get LEFT(): MainHand;
    static get RIGHT(): MainHand;
}
