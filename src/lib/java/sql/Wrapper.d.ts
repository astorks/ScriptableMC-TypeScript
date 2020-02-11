export default interface Wrapper {
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class Wrapper {
    static get $javaClass(): any;
}
