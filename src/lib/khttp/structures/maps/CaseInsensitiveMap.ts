declare var Java: any;

export default interface CaseInsensitiveMap {
	clear(): void;
	compute(arg0: string, arg1: any): any;
	compute(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: string, arg1: any): any;
	computeIfPresent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: string, arg1: any): any;
	containsKey(arg0: any): boolean;
	containsKey(key: string): boolean;
	containsValue(value: any): boolean;
	entrySet(): any;
	forEach(action: any): void;
	get(arg0: any): any;
	get(key: string): any;
	getEntries(): any;
	getKeys(): any;
	getOrDefault(key: any, defaultValue: any): any;
	getSize(): number;
	getValues(): any;
	isEmpty(): boolean;
	keySet(): any;
	merge(arg0: any, arg1: any, arg2: any): any;
	merge(arg0: string, arg1: any, arg2: any): any;
	put(arg0: any, arg1: any): any;
	put(arg0: string, arg1: any): any;
	putAll(arg0: any): void;
	putIfAbsent(arg0: string, arg1: any): any;
	putIfAbsent(arg0: any, arg1: any): any;
	remove(arg0: any): any;
	remove(arg0: any, arg1: any): boolean;
	replace(arg0: any, arg1: any): any;
	replace(arg0: string, arg1: any): any;
	replace(arg0: string, arg1: any, arg2: any): boolean;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replaceAll(arg0: any): void;
	size(): number;
	values(): any;
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

