export default interface EulerAngle {
    add(x: number, y: number, z: number): EulerAngle;
    setX(x: number): EulerAngle;
    getZ(): number;
    setZ(z: number): EulerAngle;
    getY(): number;
    subtract(x: number, y: number, z: number): EulerAngle;
    setY(y: number): EulerAngle;
    getX(): number;
}
export default class EulerAngle {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    static get ZERO(): EulerAngle;
}
