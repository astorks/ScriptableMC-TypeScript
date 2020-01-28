export interface NameTagVisibility {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class NameTagVisibility {
    static get $javaClass(): any;
    static get ALWAYS(): NameTagVisibility;
    static get NEVER(): NameTagVisibility;
    static get HIDE_FOR_OTHER_TEAMS(): NameTagVisibility;
    static get HIDE_FOR_OWN_TEAM(): NameTagVisibility;
}
