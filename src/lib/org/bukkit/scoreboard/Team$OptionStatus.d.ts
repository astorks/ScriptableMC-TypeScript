export default interface Team$OptionStatus {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Team$OptionStatus {
    static get $javaClass(): any;
    static get ALWAYS(): Team$OptionStatus;
    static get NEVER(): Team$OptionStatus;
    static get FOR_OTHER_TEAMS(): Team$OptionStatus;
    static get FOR_OWN_TEAM(): Team$OptionStatus;
}
