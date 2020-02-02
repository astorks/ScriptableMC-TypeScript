export default interface PlayerFishEvent$State {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class PlayerFishEvent$State {
    static get $javaClass(): any;
    static get FISHING(): PlayerFishEvent$State;
    static get CAUGHT_FISH(): PlayerFishEvent$State;
    static get CAUGHT_ENTITY(): PlayerFishEvent$State;
    static get IN_GROUND(): PlayerFishEvent$State;
    static get FAILED_ATTEMPT(): PlayerFishEvent$State;
    static get REEL_IN(): PlayerFishEvent$State;
    static get BITE(): PlayerFishEvent$State;
}
