export default interface Repairable {
    clone(): any;
    clone(): Repairable;
    getRepairCost(): number;
    setRepairCost(arg0: number): void;
    hasRepairCost(): boolean;
}
export default class Repairable {
    static get $javaClass(): any;
}
