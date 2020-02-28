declare var Java: any;

export default interface NBTType {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	getDeclaringClass(): any;
	getId(): number;
	name(): string;
	ordinal(): number;
}

export default class NBTType {
	public static get $javaClass(): any {
		return Java.type('de.tr7zw.changeme.nbtapi.NBTType');
	}

	public static get NBTTagByte(): NBTType {
		return this.$javaClass.NBTTagByte;
	}
	public static get NBTTagByteArray(): NBTType {
		return this.$javaClass.NBTTagByteArray;
	}
	public static get NBTTagCompound(): NBTType {
		return this.$javaClass.NBTTagCompound;
	}
	public static get NBTTagDouble(): NBTType {
		return this.$javaClass.NBTTagDouble;
	}
	public static get NBTTagEnd(): NBTType {
		return this.$javaClass.NBTTagEnd;
	}
	public static get NBTTagFloat(): NBTType {
		return this.$javaClass.NBTTagFloat;
	}
	public static get NBTTagInt(): NBTType {
		return this.$javaClass.NBTTagInt;
	}
	public static get NBTTagIntArray(): NBTType {
		return this.$javaClass.NBTTagIntArray;
	}
	public static get NBTTagList(): NBTType {
		return this.$javaClass.NBTTagList;
	}
	public static get NBTTagLong(): NBTType {
		return this.$javaClass.NBTTagLong;
	}
	public static get NBTTagShort(): NBTType {
		return this.$javaClass.NBTTagShort;
	}
	public static get NBTTagString(): NBTType {
		return this.$javaClass.NBTTagString;
	}
}

