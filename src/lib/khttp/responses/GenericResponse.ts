declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Request from '../../khttp/requests/Request.js'
import Response from '../../khttp/responses/Response.js'

export default interface GenericResponse {
	getHeaders(): any;
	getConnection(): any;
	getCookies(): CookieJar;
	getUrl(): string;
	getRaw(): InputStream;
	getText(): string;
	getJsonObject(): any;
	getJsonArray(): any;
	setEncoding(value: Charset): void;
	getInitializers(): Array<any>;
	contentIterator(chunkSize: number): any;
	lineIterator(chunkSize: number, delimiter: Array<number>): any;
	getHistory(): Array<Response>;
	getRequest(): Request;
	getStatusCode(): number;
	getContent(): Array<number>;
	getEncoding(): Charset;
}

export default class GenericResponse {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.GenericResponse');
	}
	constructor(request: Request);
	constructor(...args: any[]) {
		return new GenericResponse.$javaClass(...args);
	}
	public static access$getDefaultStartInitializers$cp(): Array<any>;
	public static access$getDefaultStartInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultStartInitializers$cp(...args);
	}
	public static access$getDefaultEndInitializers$cp(): Array<any>;
	public static access$getDefaultEndInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultEndInitializers$cp(...args);
	}
	public static access$get_cookies$p($this: GenericResponse): CookieJar;
	public static access$get_cookies$p(...args: any[]): any {
		return GenericResponse.$javaClass.access$get_cookies$p(...args);
	}
}

