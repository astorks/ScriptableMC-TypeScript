declare var Java: any;

export default interface Date {
	toInstant(): any;
	getSeconds(): number;
	getHours(): number;
	setHours(arg0: number): void;
	getMinutes(): number;
	setMinutes(arg0: number): void;
	setSeconds(arg0: number): void;
	toLocalDate(): any;
	setTime(arg0: number): void;
	getYear(): number;
	setYear(arg0: number): void;
	getMonth(): number;
	setMonth(arg0: number): void;
	setDate(arg0: number): void;
	getDay(): number;
	toLocaleString(): string;
	toGMTString(): string;
	getTimezoneOffset(): number;
	getTime(): number;
	getDate(): number;
	clone(): any;
	compareTo(arg0: any): number;
	compareTo(arg0: any): number;
	before(arg0: any): boolean;
	after(arg0: any): boolean;
}

export default class Date {
	public static get $javaClass(): any {
		return Java.type('java.sql.Date');
	}
	constructor(arg0: number, arg1: number, arg2: number);
	constructor(arg0: number);
	constructor(...args: any[]) {
		return new Date.$javaClass(...args);
	}
	public static valueOf(arg0: any): Date;
	public static valueOf(arg0: string): Date;
	public static valueOf(...args: any[]): any {
		return Date.$javaClass.valueOf(...args);
	}
	public static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
	public static UTC(...args: any[]): any {
		return Date.$javaClass.UTC(...args);
	}
	public static from(arg0: any): any;
	public static from(...args: any[]): any {
		return Date.$javaClass.from(...args);
	}
	public static parse(arg0: string): number;
	public static parse(...args: any[]): any {
		return Date.$javaClass.parse(...args);
	}
}

