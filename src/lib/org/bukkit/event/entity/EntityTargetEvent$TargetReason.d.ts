export interface EntityTargetEvent$TargetReason {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export declare class EntityTargetEvent$TargetReason {
    static get $javaClass(): any;
    static get TARGET_DIED(): EntityTargetEvent$TargetReason;
    static get CLOSEST_PLAYER(): EntityTargetEvent$TargetReason;
    static get TARGET_ATTACKED_ENTITY(): EntityTargetEvent$TargetReason;
    static get PIG_ZOMBIE_TARGET(): EntityTargetEvent$TargetReason;
    static get FORGOT_TARGET(): EntityTargetEvent$TargetReason;
    static get TARGET_ATTACKED_OWNER(): EntityTargetEvent$TargetReason;
    static get OWNER_ATTACKED_TARGET(): EntityTargetEvent$TargetReason;
    static get RANDOM_TARGET(): EntityTargetEvent$TargetReason;
    static get DEFEND_VILLAGE(): EntityTargetEvent$TargetReason;
    static get TARGET_ATTACKED_NEARBY_ENTITY(): EntityTargetEvent$TargetReason;
    static get REINFORCEMENT_TARGET(): EntityTargetEvent$TargetReason;
    static get COLLISION(): EntityTargetEvent$TargetReason;
    static get CUSTOM(): EntityTargetEvent$TargetReason;
    static get CLOSEST_ENTITY(): EntityTargetEvent$TargetReason;
    static get FOLLOW_LEADER(): EntityTargetEvent$TargetReason;
    static get TEMPT(): EntityTargetEvent$TargetReason;
    static get UNKNOWN(): EntityTargetEvent$TargetReason;
}
