declare var Java: any;

export default interface Parameters {
	getValues(): any;
	remove(arg0: any, arg1: any): boolean;
	remove(arg0: any): any;
	get(arg0: any): any;
	get(key: string): string;
	put(arg0: string, arg1: string): string;
	put(arg0: any, arg1: any): any;
	values(): any;
	clear(): void;
	isEmpty(): boolean;
	replace(arg0: string, arg1: string): string;
	replace(arg0: string, arg1: string, arg2: string): boolean;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replace(arg0: any, arg1: any): any;
	replaceAll(arg0: any): void;
	size(): number;
	entrySet(): any;
	putAll(arg0: any): void;
	putIfAbsent(arg0: string, arg1: string): string;
	putIfAbsent(arg0: any, arg1: any): any;
	keySet(): any;
	containsValue(arg0: any): boolean;
	containsValue(value: string): boolean;
	containsKey(arg0: any): boolean;
	containsKey(key: string): boolean;
	computeIfAbsent(arg0: string, arg1: any): string;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: string, arg1: any): string;
	compute(arg0: any, arg1: any): any;
	compute(arg0: string, arg1: any): string;
	merge(arg0: string, arg1: string, arg2: any): string;
	merge(arg0: any, arg1: any, arg2: any): any;
	getParameters(): Array<any>;
	getSize(): number;
	getEntries(): any;
	getKeys(): any;
	forEach(arg0: any): void;
	getOrDefault(arg0: any, arg1: any): any;
}

export default class Parameters {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.parameters.Parameters');
	}
	constructor(parameters: any);
	constructor(parameters: Array<any>);
	constructor(...args: any[]) {
		return new Parameters.$javaClass(...args);
	}
}

