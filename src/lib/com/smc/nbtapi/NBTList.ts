declare var Java: any;
import NBTCompound from './NBTCompound.js'
import NBTType from './NBTType.js'

export default interface NBTList {
	add(element: any): boolean;
	add(index: number, element: any): void;
	addAll(c: Array<any>): boolean;
	addAll(index: number, c: Array<any>): boolean;
	clear(): void;
	contains(o: any): boolean;
	containsAll(c: Array<any>): boolean;
	forEach(action: any): void;
	get(arg0: number): any;
	getName(): string;
	getParent(): NBTCompound;
	getType(): NBTType;
	indexOf(o: any): number;
	isEmpty(): boolean;
	iterator(): any;
	lastIndexOf(o: any): number;
	listIterator(): any;
	listIterator(startIndex: number): any;
	parallelStream(): any;
	remove(i: number): any;
	remove(o: any): boolean;
	removeAll(c: Array<any>): boolean;
	removeIf(filter: any): boolean;
	replaceAll(operator: any): void;
	retainAll(c: Array<any>): boolean;
	set(index: number, element: any): any;
	size(): number;
	sort(c: any): void;
	spliterator(): any;
	stream(): any;
	subList(fromIndex: number, toIndex: number): Array<any>;
	toArray(): Array<any>;
	toArray(a: Array<any>): Array<any>;
	toArray(generator: any): Array<any>;
}

export default class NBTList {
	public static get $javaClass(): any {
		return Java.type('com.smc.nbtapi.NBTList');
	}

}

