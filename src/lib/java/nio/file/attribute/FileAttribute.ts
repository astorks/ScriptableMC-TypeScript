declare var Java: any;

export default interface FileAttribute {
	name(): string;
	value(): any;
}

export default class FileAttribute {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileAttribute');
	}

}

