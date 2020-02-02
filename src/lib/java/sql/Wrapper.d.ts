export default interface Wrapper {
    isWrapperFor(arg0: any): boolean;
    unwrap(arg0: any): any;
}
export default class Wrapper {
    static get $javaClass(): any;
}
