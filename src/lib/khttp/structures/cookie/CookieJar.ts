declare var Java: any;
import Cookie from '../../../khttp/structures/cookie/Cookie.js'

export default interface CookieJar {
	clear(): void;
	compute(key: any, remappingFunction: any): any;
	computeIfAbsent(key: any, mappingFunction: any): any;
	computeIfPresent(key: any, remappingFunction: any): any;
	containsKey(key: string): boolean;
	containsKey(arg0: any): boolean;
	containsValue(arg0: any): boolean;
	containsValue(value: string): boolean;
	entrySet(): any;
	forEach(action: any): void;
	get(arg0: any): any;
	get(key: string): string;
	getCookie(key: string): Cookie;
	getCookies(): Array<Cookie>;
	getEntries(): any;
	getKeys(): any;
	getOrDefault(key: any, defaultValue: any): any;
	getSize(): number;
	getValues(): any;
	isEmpty(): boolean;
	keySet(): any;
	merge(key: any, value: any, remappingFunction: any): any;
	put(arg0: any, arg1: any): any;
	put(key: string, value: string): string;
	putAll(from: any): void;
	putIfAbsent(key: any, value: any): any;
	remove(key: string): string;
	remove(arg0: any): any;
	remove(key: any, value: any): boolean;
	replace(key: any, value: any): any;
	replace(key: any, oldValue: any, newValue: any): boolean;
	replaceAll(_function: any): void;
	setCookie(cookie: Cookie): void;
	size(): number;
	values(): any;
}

export default class CookieJar {
	public static get $javaClass(): any {
		return Java.type('khttp.structures.cookie.CookieJar');
	}

	constructor();
	constructor(cookies: Array<Cookie>);
	constructor(cookies: any);
	constructor(elements$iv: Array<Cookie>, arg1: number, arg2: any);
	constructor(...args: any[]) {
		return new CookieJar.$javaClass(...args);
	}

}

