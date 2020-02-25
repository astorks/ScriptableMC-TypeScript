declare var Java: any;

export default interface FileTime {
	compareTo(other: FileTime): number;
	compareTo(arg0: any): number;
	to(unit: any): number;
	toInstant(): any;
	toMillis(): number;
}

export default class FileTime {
	public static get $javaClass(): any {
		return Java.type('java.nio.file.attribute.FileTime');
	}

	public static from(instant: any): FileTime;
	public static from(value: number, unit: any): FileTime;
	public static from(...args: any[]): any {
		return FileTime.$javaClass.from(...args);
	}

	public static fromMillis(value: number): FileTime;
	public static fromMillis(...args: any[]): any {
		return FileTime.$javaClass.fromMillis(...args);
	}

}

