import Plugin from '../../org/bukkit/plugin/Plugin.js';
export default interface NamespacedKey {
    getNamespace(): string;
    getKey(): string;
}
export default class NamespacedKey {
    static get $javaClass(): any;
    constructor(plugin: Plugin, key: string);
    constructor(namespace: string, key: string);
    static get MINECRAFT(): string;
    static get BUKKIT(): string;
    static minecraft(key: string): NamespacedKey;
    static randomKey(): NamespacedKey;
}
