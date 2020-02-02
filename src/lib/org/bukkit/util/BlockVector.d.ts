import Location from '../../../org/bukkit/Location.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface BlockVector extends Vector {
    clone(): BlockVector;
    clone(): Vector;
    clone(): any;
    isNormalized(): boolean;
    serialize(): any;
    setX(x: number): Vector;
    setX(x: number): Vector;
    setX(x: number): Vector;
    getX(): number;
    getBlockX(): number;
    setY(y: number): Vector;
    setY(y: number): Vector;
    setY(y: number): Vector;
    getY(): number;
    getBlockY(): number;
    setZ(z: number): Vector;
    setZ(z: number): Vector;
    setZ(z: number): Vector;
    getZ(): number;
    getBlockZ(): number;
    subtract(vec: Vector): Vector;
    lengthSquared(): number;
    distance(o: Vector): number;
    distanceSquared(o: Vector): number;
    multiply(m: number): Vector;
    multiply(vec: Vector): Vector;
    multiply(m: number): Vector;
    multiply(m: number): Vector;
    checkFinite(): void;
    dot(other: Vector): number;
    midpoint(other: Vector): Vector;
    getMidpoint(other: Vector): Vector;
    crossProduct(o: Vector): Vector;
    getCrossProduct(o: Vector): Vector;
    isInAABB(min: Vector, max: Vector): boolean;
    isInSphere(origin: Vector, radius: number): boolean;
    rotateAroundX(angle: number): Vector;
    rotateAroundY(angle: number): Vector;
    rotateAroundZ(angle: number): Vector;
    rotateAroundAxis(axis: Vector, angle: number): Vector;
    rotateAroundNonUnitAxis(axis: Vector, angle: number): Vector;
    toLocation(world: World): Location;
    toLocation(world: World, yaw: number, pitch: number): Location;
    toBlockVector(): BlockVector;
    angle(other: Vector): number;
    add(vec: Vector): Vector;
    length(): number;
    copy(vec: Vector): Vector;
    normalize(): Vector;
    zero(): Vector;
    divide(vec: Vector): Vector;
}
export default class BlockVector {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    constructor(x: number, y: number, z: number);
    constructor();
    constructor(x: number, y: number, z: number);
    constructor(vec: Vector);
    static deserialize(args: any): BlockVector;
    static deserialize(args: any): Vector;
    static getEpsilon(): number;
    static getMinimum(v1: Vector, v2: Vector): Vector;
    static getMaximum(v1: Vector, v2: Vector): Vector;
    static getRandom(): Vector;
}
