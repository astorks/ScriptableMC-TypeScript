declare var Java: any;

export interface File {
	isDirectory(): boolean;
	exists(): boolean;
	isFile(): boolean;
	createNewFile(): boolean;
	mkdir(): boolean;
	mkdirs(): boolean;
	readText(): string;
	readLines(): Array<string>;
	writeText(text: string): void;
	parentFile(): File;
}

export class File {
	public static get $javaClass(): any {
		return Java.type('com.pixlfox.scriptablemc.File');
	}
	constructor(pathName: string);
	constructor(...args: any[]) {
		return new File.$javaClass(...args);
	}
}

