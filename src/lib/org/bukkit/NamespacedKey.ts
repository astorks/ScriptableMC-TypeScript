declare var Java: any;
import Plugin from './plugin/Plugin.js'

export default interface NamespacedKey {
	getKey(): string;
	getNamespace(): string;
}

export default class NamespacedKey {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.NamespacedKey');
	}

	constructor(plugin: Plugin, key: string);
	constructor(namespace: string, key: string);
	constructor(...args: any[]) {
		return new NamespacedKey.$javaClass(...args);
	}

	public static get BUKKIT(): string {
		return NamespacedKey.$javaClass.BUKKIT;
	}

	public static get MINECRAFT(): string {
		return NamespacedKey.$javaClass.MINECRAFT;
	}

	public static fromString(key: string): NamespacedKey;
	public static fromString(string: string, defaultNamespace: Plugin): NamespacedKey;
	public static fromString(...args: any[]): any {
		return NamespacedKey.$javaClass.fromString(...args);
	}

	public static minecraft(key: string): NamespacedKey;
	public static minecraft(...args: any[]): any {
		return NamespacedKey.$javaClass.minecraft(...args);
	}

	public static randomKey(): NamespacedKey;
	public static randomKey(...args: any[]): any {
		return NamespacedKey.$javaClass.randomKey(...args);
	}

}

