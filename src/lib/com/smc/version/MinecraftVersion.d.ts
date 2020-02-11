import SnapshotVersion from '../../../com/smc/version/SnapshotVersion.js';
export default interface MinecraftVersion {
    compareTo(arg0: any): number;
    compareTo(that: MinecraftVersion): number;
    getVersion(): string;
    getMajor(): number;
    isAfter(other: MinecraftVersion): boolean;
    isAfterOrEq(other: MinecraftVersion): boolean;
    isBeforeOrEq(other: MinecraftVersion): boolean;
    isBetween(o1: MinecraftVersion, o2: MinecraftVersion): boolean;
    getBuild(): number;
    getSnapshot(): SnapshotVersion;
    getMinor(): number;
    isSnapshot(): boolean;
    isBefore(other: MinecraftVersion): boolean;
    getDevelopmentStage(): string;
}
export default class MinecraftVersion {
    static get $javaClass(): any;
    static get COMPARATOR(): any;
    static of(major: number, minor: number, build: number): MinecraftVersion;
    static parse(version: string): MinecraftVersion;
    static parse(version: string, parseSnapshot: boolean): MinecraftVersion;
    static getRuntimeVersion(): MinecraftVersion;
}
