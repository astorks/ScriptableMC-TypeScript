declare var Java: any;

export default interface Timestamp {
	toInstant(): any;
	setTime(arg0: number): void;
	getTime(): number;
	getNanos(): number;
	setNanos(arg0: number): void;
	toLocalDateTime(): any;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	compareTo(arg0: Timestamp): number;
	before(arg0: Timestamp): boolean;
	after(arg0: Timestamp): boolean;
	getYear(): number;
	getSeconds(): number;
	setYear(arg0: number): void;
	getMonth(): number;
	setMonth(arg0: number): void;
	setDate(arg0: number): void;
	getDay(): number;
	getHours(): number;
	setHours(arg0: number): void;
	getMinutes(): number;
	setMinutes(arg0: number): void;
	setSeconds(arg0: number): void;
	toLocaleString(): string;
	toGMTString(): string;
	getTimezoneOffset(): number;
	getDate(): number;
	clone(): any;
	before(arg0: any): boolean;
	after(arg0: any): boolean;
}

export default class Timestamp {
	public static get $javaClass(): any {
		return Java.type('java.sql.Timestamp');
	}
	constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new Timestamp.$javaClass(...args);
	}
	public static from(arg0: any): Timestamp;
	public static from(arg0: any): any;
	public static from(...args: any[]): any {
		return Timestamp.$javaClass.from(...args);
	}
	public static valueOf(arg0: string): Timestamp;
	public static valueOf(arg0: any): Timestamp;
	public static valueOf(...args: any[]): any {
		return Timestamp.$javaClass.valueOf(...args);
	}
	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Timestamp.$javaClass.UTC(...args);
	}
	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Timestamp.$javaClass.parse(...args);
	}
}

