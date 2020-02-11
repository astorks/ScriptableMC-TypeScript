import SnapshotVersion from '../../../com/smc/version/SnapshotVersion.js';
export default interface MinecraftVersion {
    compareTo(arg0: any): number;
    compareTo(that: MinecraftVersion): number;
    getVersion(): string;
    getDevelopmentStage(): string;
    getMinor(): number;
    getBuild(): number;
    isBefore(other: MinecraftVersion): boolean;
    isBeforeOrEq(other: MinecraftVersion): boolean;
    isBetween(o1: MinecraftVersion, o2: MinecraftVersion): boolean;
    isAfter(other: MinecraftVersion): boolean;
    getSnapshot(): SnapshotVersion;
    isSnapshot(): boolean;
    isAfterOrEq(other: MinecraftVersion): boolean;
    getMajor(): number;
}
export default class MinecraftVersion {
    static get $javaClass(): any;
    static get COMPARATOR(): any;
    static of(major: number, minor: number, build: number): MinecraftVersion;
    static parse(version: string): MinecraftVersion;
    static parse(version: string, parseSnapshot: boolean): MinecraftVersion;
    static getRuntimeVersion(): MinecraftVersion;
}
