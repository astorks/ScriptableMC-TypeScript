declare var Java: any;

export default interface Cookie {
	getValueWithAttributes(): string;
	component3(): any;
	component1(): string;
	component2(): any;
	getValue(): any;
	getKey(): string;
	copy(key: string, value: any, attributes: any): Cookie;
	getAttributes(): any;
}

export default class Cookie {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.cookie.Cookie');
	}
	constructor(cookie: Cookie);
	constructor(key: string, value: any, attributes: any);
	constructor(string: string);
	constructor(arg0: string, arg1: any, arg2: any, arg3: number, arg4: any);
	constructor(...args: any[]) {
		return new Cookie.$javaClass(...args);
	}
	public static copy$default(arg0: Cookie, arg1: string, arg2: any, arg3: any, arg4: number, arg5: any): Cookie;
	public static copy$default(...args: any[]): any {
		return Cookie.$javaClass.copy$default(...args);
	}
}

