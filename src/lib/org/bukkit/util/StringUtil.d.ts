export default interface StringUtil {
}
export default class StringUtil {
    static get $javaClass(): any;
    constructor();
    static startsWithIgnoreCase(string: string, prefix: string): boolean;
    static copyPartialMatches(token: string, originals: any, collection: any): any;
}
