export default interface NameTagVisibility {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class NameTagVisibility {
    static get $javaClass(): any;
    static get ALWAYS(): NameTagVisibility;
    static get NEVER(): NameTagVisibility;
    static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility;
    static get HIDE_FOR_OWN_TEAM(): NameTagVisibility;
}
