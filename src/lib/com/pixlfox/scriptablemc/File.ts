declare var Java: any;

export interface File {
	parentFile(): File;
	readText(): string;
	readLines(): Array<string>;
	writeText(text: string): void;
	exists(): boolean;
	isDirectory(): boolean;
	isFile(): boolean;
	createNewFile(): boolean;
	mkdir(): boolean;
	mkdirs(): boolean;
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

