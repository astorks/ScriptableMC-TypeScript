declare var Java: any;

export default interface Parameters {
	clear(): void;
	compute(arg0: string, arg1: any): string;
	compute(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: string, arg1: any): string;
	computeIfPresent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: string, arg1: any): string;
	containsKey(key: string): boolean;
	containsKey(arg0: any): boolean;
	containsValue(value: string): boolean;
	containsValue(arg0: any): boolean;
	entrySet(): any;
	forEach(action: any): void;
	get(arg0: any): any;
	get(key: string): string;
	getEntries(): any;
	getKeys(): any;
	getOrDefault(key: any, defaultValue: any): any;
	getParameters(): Array<any>;
	getSize(): number;
	getValues(): any;
	isEmpty(): boolean;
	keySet(): any;
	merge(arg0: string, arg1: string, arg2: any): string;
	merge(arg0: any, arg1: any, arg2: any): any;
	put(arg0: any, arg1: any): any;
	put(arg0: string, arg1: string): string;
	putAll(arg0: any): void;
	putIfAbsent(arg0: any, arg1: any): any;
	putIfAbsent(arg0: string, arg1: string): string;
	remove(arg0: any): any;
	remove(arg0: any, arg1: any): boolean;
	replace(arg0: string, arg1: string): string;
	replace(arg0: any, arg1: any): any;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replace(arg0: string, arg1: string, arg2: string): boolean;
	replaceAll(arg0: any): void;
	size(): number;
	values(): any;
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

