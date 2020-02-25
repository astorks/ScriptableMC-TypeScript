declare var Java: any;
import CopyOption from '../../../java/nio/file/CopyOption.js'
import OpenOption from '../../../java/nio/file/OpenOption.js'

export default interface LinkOption {
	compareTo(arg0: any): number;
	compareTo(o: any): number;
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
}

