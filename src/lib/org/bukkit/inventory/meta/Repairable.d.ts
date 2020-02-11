export default interface Repairable {
    clone(): any;
    clone(): Repairable;
    setRepairCost(arg0: number): void;
    getRepairCost(): number;
    hasRepairCost(): boolean;
}
export default class Repairable {
    static get $javaClass(): any;
}
