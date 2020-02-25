declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import Projectile from '../../../org/bukkit/entity/Projectile.js'
import ProjectileSource from '../../../org/bukkit/projectiles/ProjectileSource.js'
import Vector from '../../../org/bukkit/util/Vector.js'

export default interface BlockProjectileSource extends ProjectileSource {
	getBlock(): Block;
	launchProjectile(arg0: any): Projectile;
	launchProjectile(arg0: any, arg1: Vector): Projectile;
}

export default class BlockProjectileSource {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.projectiles.BlockProjectileSource');
	}

}

