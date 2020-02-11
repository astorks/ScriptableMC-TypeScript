export default interface EntityPotionEffectEvent$Action {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(o: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class EntityPotionEffectEvent$Action {
    static get $javaClass(): any;
    static get ADDED(): EntityPotionEffectEvent$Action;
    static get CHANGED(): EntityPotionEffectEvent$Action;
    static get CLEARED(): EntityPotionEffectEvent$Action;
    static get REMOVED(): EntityPotionEffectEvent$Action;
}
