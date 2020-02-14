declare var Java: any;

export default interface CaseInsensitiveMap {
	getValues(): any;
	remove(arg0: any): any;
	remove(arg0: any, arg1: any): boolean;
	get(arg0: any): any;
	get(key: string): any;
	put(arg0: any, arg1: any): any;
	put(arg0: string, arg1: any): any;
	values(): any;
	clear(): void;
	isEmpty(): boolean;
	replace(arg0: string, arg1: any, arg2: any): boolean;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replace(arg0: any, arg1: any): any;
	replace(arg0: string, arg1: any): any;
	replaceAll(arg0: any): void;
	size(): number;
	entrySet(): any;
	putAll(arg0: any): void;
	putIfAbsent(arg0: any, arg1: any): any;
	putIfAbsent(arg0: string, arg1: any): any;
	keySet(): any;
	containsValue(value: any): boolean;
	containsKey(arg0: any): boolean;
	containsKey(key: string): boolean;
	computeIfAbsent(arg0: string, arg1: any): any;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: string, arg1: any): any;
	computeIfPresent(arg0: any, arg1: any): any;
	compute(arg0: any, arg1: any): any;
	compute(arg0: string, arg1: any): any;
	merge(arg0: any, arg1: any, arg2: any): any;
	merge(arg0: string, arg1: any, arg2: any): any;
	getSize(): number;
	getEntries(): any;
	getKeys(): any;
	forEach(arg0: any): void;
	getOrDefault(arg0: any, arg1: any): any;
}

export default class CaseInsensitiveMap {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.maps.CaseInsensitiveMap');
	}
	constructor(map: any);
	constructor(...args: any[]) {
		return new CaseInsensitiveMap.$javaClass(...args);
	}
}

