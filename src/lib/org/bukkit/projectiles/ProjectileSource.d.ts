import { Projectile } from '../../../org/bukkit/entity/Projectile.js';
import { Vector } from '../../../org/bukkit/util/Vector.js';
export interface ProjectileSource {
    launchProjectile(arg0: any): Projectile;
    launchProjectile(arg0: any, arg1: Vector): Projectile;
}
export declare class ProjectileSource {
    static get $javaClass(): any;
}
