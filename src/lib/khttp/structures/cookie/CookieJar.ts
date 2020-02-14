declare var Java: any;
import Cookie from '../../../khttp/structures/cookie/Cookie.js'

export default interface CookieJar {
	setCookie(cookie: Cookie): void;
	getCookies(): Array<Cookie>;
	getCookie(key: string): Cookie;
	getValues(): any;
	remove(key: string): string;
	remove(arg0: any): any;
	get(key: string): string;
	get(arg0: any): any;
	put(arg0: any, arg1: any): any;
	put(key: string, value: string): string;
	values(): any;
	clear(): void;
	isEmpty(): boolean;
	size(): number;
	entrySet(): any;
	putAll(from: any): void;
	keySet(): any;
	containsValue(arg0: any): boolean;
	containsValue(value: string): boolean;
	containsKey(key: string): boolean;
	containsKey(arg0: any): boolean;
	getSize(): number;
	getEntries(): any;
	getKeys(): any;
	remove(arg0: any, arg1: any): boolean;
	replace(arg0: any, arg1: any): any;
	replace(arg0: any, arg1: any, arg2: any): boolean;
	replaceAll(arg0: any): void;
	putIfAbsent(arg0: any, arg1: any): any;
	forEach(arg0: any): void;
	getOrDefault(arg0: any, arg1: any): any;
	computeIfAbsent(arg0: any, arg1: any): any;
	computeIfPresent(arg0: any, arg1: any): any;
	compute(arg0: any, arg1: any): any;
	merge(arg0: any, arg1: any, arg2: any): any;
}

export default class CookieJar {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.cookie.CookieJar');
	}
	constructor(cookies: any);
	constructor();
	constructor(elements$iv: Array<Cookie>, arg1: number, arg2: any);
	constructor(cookies: Array<Cookie>);
	constructor(...args: any[]) {
		return new CookieJar.$javaClass(...args);
	}
}

