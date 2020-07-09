declare var Java: any;

export default interface Parameters {
	clear(): void;
	compute(arg0: string, arg1: any): string;
	compute(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: string, arg1: any): string;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: string, arg1: any): string;
	containsKey(arg0: any): boolean;
	containsKey(key: string): boolean;
	containsValue(value: string): boolean;
	containsValue(arg0: any): boolean;
	entrySet(): any;
	forEach(action: any): void;
	get(key: string): string;
	get(arg0: any): any;
	getEntries(): any;
	getKeys(): any;
	getOrDefault(key: any, defaultValue: any): any;
	getParameters(): Array<any>;
	getSize(): number;
	getValues(): Array<string>;
	isEmpty(): boolean;
	keySet(): any;
	merge(arg0: any, arg1: any, arg2: any): any;
	merge(arg0: string, arg1: string, arg2: any): string;
	put(arg0: string, arg1: string): string;
	put(arg0: any, arg1: any): any;
	putAll(arg0: any): void;
	putIfAbsent(arg0: string, arg1: string): string;
	putIfAbsent(arg0: any, arg1: any): any;
	remove(arg0: any): any;
	remove(arg0: any, arg1: any): boolean;
	replace(arg0: any, arg1: any): any;
	replace(arg0: string, arg1: string): string;
	replace(arg0: string, arg1: string, arg2: string): boolean;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replaceAll(arg0: any): void;
	size(): number;
	values(): Array<string>;
}

export default class Parameters {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.parameters.Parameters');
	}

	constructor(parameters: Array<any>);
	constructor(parameters: any);
	constructor(...args: any[]) {
		return new Parameters.$javaClass(...args);
	}

}

