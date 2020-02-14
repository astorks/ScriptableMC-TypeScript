declare var Java: any;

export default interface FileTime {
	toInstant(): any;
	toMillis(): number;
	to(arg0: any): number;
	compareTo(arg0: any): number;
	compareTo(arg0: FileTime): number;
}

export default class FileTime {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileTime');
	}
	public static fromMillis(arg0: number): FileTime;
	public static fromMillis(...args: any[]): any {
		return FileTime.$javaClass.fromMillis(...args);
	}
	public static from(arg0: number, arg1: any): FileTime;
	public static from(arg0: any): FileTime;
	public static from(...args: any[]): any {
		return FileTime.$javaClass.from(...args);
	}
}

