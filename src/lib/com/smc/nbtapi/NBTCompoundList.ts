declare var Java: any;
import NBTCompound from './NBTCompound.js'
import NBTList from './NBTList.js'
import NBTListCompound from './NBTListCompound.js'
import NBTType from './NBTType.js'

export default interface NBTCompoundList extends NBTList {
	add(empty: NBTListCompound): boolean;
	add(arg0: any): boolean;
	add(index: number, element: NBTListCompound): void;
	add(arg0: number, arg1: any): void;
	addAll(c: Array<any>): boolean;
	addAll(index: number, c: Array<any>): boolean;
	addCompound(): NBTListCompound;
	addCompound(comp: NBTCompound): NBTCompound;
	clear(): void;
	contains(o: any): boolean;
	containsAll(c: Array<any>): boolean;
	forEach(action: any): void;
	get(index: number): any;
	get(index: number): NBTListCompound;
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
	set(index: number, element: NBTListCompound): NBTListCompound;
	set(arg0: number, arg1: any): any;
	size(): number;
	sort(c: any): void;
	spliterator(): any;
	stream(): any;
	subList(fromIndex: number, toIndex: number): Array<any>;
	toArray(): Array<any>;
	toArray(a: Array<any>): Array<any>;
	toArray(generator: any): Array<any>;
}

export default class NBTCompoundList {
	public static get $javaClass(): any {
		return Java.type('com.smc.nbtapi.NBTCompoundList');
	}

}

