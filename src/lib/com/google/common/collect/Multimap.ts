declare var Java: any;
import Multiset from '../../../../com/google/common/collect/Multiset.js'

export default interface Multimap {
	asMap(): any;
	clear(): void;
	containsEntry(arg0: any, arg1: any): boolean;
	containsKey(arg0: any): boolean;
	containsValue(arg0: any): boolean;
	entries(): any;
	forEach(action: any): void;
	get(arg0: any): any;
	isEmpty(): boolean;
	keySet(): any;
	keys(): Multiset;
	put(arg0: any, arg1: any): boolean;
	putAll(arg0: Multimap): boolean;
	putAll(arg0: any, arg1: any): boolean;
	remove(arg0: any, arg1: any): boolean;
	removeAll(arg0: any): any;
	replaceValues(arg0: any, arg1: any): any;
	size(): number;
	values(): any;
}

export default class Multimap {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.Multimap');
	}

}

