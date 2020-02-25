declare var Java: any;

export default interface Multiset {
	add(arg0: any): boolean;
	add(arg0: any, arg1: number): number;
	addAll(arg0: any): boolean;
	clear(): void;
	contains(arg0: any): boolean;
	containsAll(arg0: any): boolean;
	count(arg0: any): number;
	elementSet(): any;
	entrySet(): any;
	forEach(action: any): void;
	forEachEntry(action: any): void;
	isEmpty(): boolean;
	iterator(): any;
	parallelStream(): any;
	remove(arg0: any): boolean;
	remove(arg0: any, arg1: number): number;
	removeAll(arg0: any): boolean;
	removeIf(filter: any): boolean;
	retainAll(arg0: any): boolean;
	setCount(arg0: any, arg1: number): number;
	setCount(arg0: any, arg1: number, arg2: number): boolean;
	size(): number;
	spliterator(): any;
	stream(): any;
	toArray(): Array<any>;
	toArray(generator: any): Array<any>;
	toArray(arg0: Array<any>): Array<any>;
}

export default class Multiset {
	public static get $javaClass(): any {
		return Java.type('com.google.common.collect.Multiset');
	}

}

