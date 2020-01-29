export interface EulerAngle {
    add(x: number, y: number, z: number): EulerAngle;
    getX(): number;
    getY(): number;
    subtract(x: number, y: number, z: number): EulerAngle;
    getZ(): number;
    setX(x: number): EulerAngle;
    setZ(z: number): EulerAngle;
    setY(y: number): EulerAngle;
}
export declare class EulerAngle {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    static get ZERO(): EulerAngle;
}
