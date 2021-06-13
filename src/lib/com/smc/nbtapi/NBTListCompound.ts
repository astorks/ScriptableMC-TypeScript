declare var Java: any;
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import NBTCompound from './NBTCompound.js'
import NBTCompoundList from './NBTCompoundList.js'
import NBTList from './NBTList.js'
import NBTType from './NBTType.js'
import OutputStream from '../../../java/io/OutputStream.js'

export default interface NBTListCompound extends NBTCompound {
	addCompound(_name: string): NBTCompound;
	asNBTString(): string;
	getBoolean(key: string): boolean;
	getByte(key: string): number;
	getByteArray(key: string): Array<number>;
	getCompound(): any;
	getCompound(_name: string): NBTCompound;
	getCompoundList(_name: string): NBTCompoundList;
	getDouble(key: string): number;
	getDoubleList(_name: string): NBTList;
	getFloat(key: string): number;
	getFloatList(_name: string): NBTList;
	getIntArray(key: string): Array<number>;
	getInteger(key: string): any;
	getIntegerList(_name: string): NBTList;
	getItemStack(key: string): ItemStack;
	getKeys(): any;
	getListParent(): NBTList;
	getListType(_name: string): NBTType;
	getLong(key: string): number;
	getLongList(_name: string): NBTList;
	getName(): string;
	getObject(key: string, type: any): any;
	getOrCreateCompound(_name: string): NBTCompound;
	getParent(): NBTCompound;
	getShort(key: string): number;
	getString(key: string): string;
	getStringList(_name: string): NBTList;
	getType(_name: string): NBTType;
	getUUID(key: string): string;
	hasKey(key: string): boolean;
	mergeCompound(comp: NBTCompound): void;
	removeKey(key: string): void;
	setBoolean(key: string, value: boolean): void;
	setByte(key: string, value: number): void;
	setByteArray(key: string, value: Array<number>): void;
	setDouble(key: string, value: number): void;
	setFloat(key: string, value: number): void;
	setIntArray(key: string, value: Array<number>): void;
	setInteger(key: string, value: any): void;
	setItemStack(key: string, item: ItemStack): void;
	setLong(key: string, value: number): void;
	setObject(key: string, value: any): void;
	setShort(key: string, value: number): void;
	setString(key: string, value: string): void;
	setUUID(key: string, value: string): void;
	writeCompound(stream: OutputStream): void;
}

export default class NBTListCompound {
	public static get $javaClass(): any {
		return Java.type('com.smc.nbtapi.NBTListCompound');
	}

}

