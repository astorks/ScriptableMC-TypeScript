declare var Java: any;

export default interface Date {
	after(when: any): boolean;
	before(when: any): boolean;
	clone(): any;
	compareTo(anotherDate: any): number;
	compareTo(arg0: any): number;
	getDate(): number;
	getDay(): number;
	getHours(): number;
	getMinutes(): number;
	getMonth(): number;
	getSeconds(): number;
	getTime(): number;
	getTimezoneOffset(): number;
	getYear(): number;
	setDate(date: number): void;
	setHours(i: number): void;
	setMinutes(i: number): void;
	setMonth(month: number): void;
	setSeconds(i: number): void;
	setTime(date: number): void;
	setYear(year: number): void;
	toGMTString(): string;
	toInstant(): any;
	toLocalDate(): any;
	toLocaleString(): string;
}

export default class Date {
	public static get $javaClass(): any {
		return Java.type('java.sql.Date');
	}

	constructor(date: number);
	constructor(year: number, month: number, day: number);
	constructor(...args: any[]) {
		return new Date.$javaClass(...args);
	}

	public static UTC(year: number, month: number, date: number, hrs: number, min: number, sec: number): number;
	public static UTC(...args: any[]): any {
		return Date.$javaClass.UTC(...args);
	}

	public static from(instant: any): any;
	public static from(...args: any[]): any {
		return Date.$javaClass.from(...args);
	}

	public static parse(s: string): number;
	public static parse(...args: any[]): any {
		return Date.$javaClass.parse(...args);
	}

	public static valueOf(date: any): Date;
	public static valueOf(s: string): Date;
	public static valueOf(...args: any[]): any {
		return Date.$javaClass.valueOf(...args);
	}

}

