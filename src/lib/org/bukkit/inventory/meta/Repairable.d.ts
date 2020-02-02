export default interface Repairable {
    hasRepairCost(): boolean;
    getRepairCost(): number;
    setRepairCost(arg0: number): void;
    clone(): Repairable;
    clone(): any;
}
export default class Repairable {
    static get $javaClass(): any;
}
