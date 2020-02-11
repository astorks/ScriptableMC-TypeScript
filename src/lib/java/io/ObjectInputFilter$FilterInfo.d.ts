export default interface ObjectInputFilter$FilterInfo {
    depth(): number;
    arrayLength(): number;
    serialClass(): any;
    references(): number;
    streamBytes(): number;
}
export default class ObjectInputFilter$FilterInfo {
    static get $javaClass(): any;
}
