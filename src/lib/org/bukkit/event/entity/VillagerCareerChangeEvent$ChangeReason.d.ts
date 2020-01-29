export interface VillagerCareerChangeEvent$ChangeReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class VillagerCareerChangeEvent$ChangeReason {
    static get $javaClass(): any;
    static get LOSING_JOB(): VillagerCareerChangeEvent$ChangeReason;
    static get EMPLOYED(): VillagerCareerChangeEvent$ChangeReason;
}
