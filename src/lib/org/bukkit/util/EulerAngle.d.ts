export interface EulerAngle {
    setX(x: number): EulerAngle;
    getX(): number;
    setY(y: number): EulerAngle;
    getY(): number;
    setZ(z: number): EulerAngle;
    getZ(): number;
    subtract(x: number, y: number, z: number): EulerAngle;
    add(x: number, y: number, z: number): EulerAngle;
}
export declare class EulerAngle {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    static get ZERO(): EulerAngle;
}
