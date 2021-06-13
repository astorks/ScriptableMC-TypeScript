declare var Java: any;
import CopyOption from './CopyOption.js'
import OpenOption from './OpenOption.js'

export default interface LinkOption extends OpenOption, CopyOption {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
	describeConstable(): any;
	getDeclaringClass(): any;
	name(): string;
	ordinal(): number;
}

export default class LinkOption {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.LinkOption');
	}

	public static get NOFOLLOW_LINKS(): LinkOption {
		return this.$javaClass.NOFOLLOW_LINKS;
	}
	public static valueOf(_name: string): LinkOption;
	public static valueOf(enumClass: any, _name: string): any;
	public static valueOf(...args: any[]): any {
		return LinkOption.$javaClass.valueOf(...args);
	}

	public static values(): Array<LinkOption>;
	public static values(...args: any[]): any {
		return LinkOption.$javaClass.values(...args);
	}

}

