export default interface Repairable {
    clone(): any;
    clone(): Repairable;
    hasRepairCost(): boolean;
    setRepairCost(arg0: number): void;
    getRepairCost(): number;
}
export default class Repairable {
    static get $javaClass(): any;
}
