export default interface EulerAngle {
    add(x: number, y: number, z: number): EulerAngle;
    setZ(z: number): EulerAngle;
    setX(x: number): EulerAngle;
    subtract(x: number, y: number, z: number): EulerAngle;
    getZ(): number;
    setY(y: number): EulerAngle;
    getY(): number;
    getX(): number;
}
export default class EulerAngle {
    static get $javaClass(): any;
    constructor(x: number, y: number, z: number);
    static get ZERO(): EulerAngle;
}
