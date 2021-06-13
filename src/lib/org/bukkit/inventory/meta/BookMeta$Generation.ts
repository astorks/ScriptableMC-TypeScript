declare var Java: any;

export default interface BookMeta$Generation {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class BookMeta$Generation {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.inventory.meta.BookMeta$Generation');
	}

	public static get COPY_OF_COPY(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_COPY;
	}
	public static get COPY_OF_ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.COPY_OF_ORIGINAL;
	}
	public static get ORIGINAL(): BookMeta$Generation {
		return this.$javaClass.ORIGINAL;
	}
	public static get TATTERED(): BookMeta$Generation {
		return this.$javaClass.TATTERED;
	}
	public static valueOf(arg0: string): BookMeta$Generation;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return BookMeta$Generation.$javaClass.valueOf(...args);
	}

	public static values(): Array<BookMeta$Generation>;
	public static values(...args: any[]): any {
		return BookMeta$Generation.$javaClass.values(...args);
	}

}

