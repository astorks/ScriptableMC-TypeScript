declare var Java: any;
import Charset from '../../java/nio/charset/Charset.js'
import CookieJar from '../../khttp/structures/cookie/CookieJar.js'
import InputStream from '../../java/io/InputStream.js'
import Request from '../../khttp/requests/Request.js'
import Response from '../../khttp/responses/Response.js'

export default interface GenericResponse {
	contentIterator(chunkSize: number): any;
	getConnection(): any;
	getContent(): Array<number>;
	getCookies(): CookieJar;
	getEncoding(): Charset;
	getHeaders(): any;
	getHistory(): Array<Response>;
	getInitializers(): Array<any>;
	getJsonArray(): any;
	getJsonObject(): any;
	getRaw(): InputStream;
	getRequest(): Request;
	getStatusCode(): number;
	getText(): string;
	getUrl(): string;
	lineIterator(chunkSize: number, delimiter: Array<number>): any;
	setEncoding(value: Charset): void;
}

export default class GenericResponse {
	public static get $javaClass(): any {
		return Java.type('khttp.responses.GenericResponse');
	}

	constructor(request: Request);
	constructor(...args: any[]) {
		return new GenericResponse.$javaClass(...args);
	}

	public static access$getDefaultEndInitializers$cp(): Array<any>;
	public static access$getDefaultEndInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultEndInitializers$cp(...args);
	}

	public static access$getDefaultStartInitializers$cp(): Array<any>;
	public static access$getDefaultStartInitializers$cp(...args: any[]): any {
		return GenericResponse.$javaClass.access$getDefaultStartInitializers$cp(...args);
	}

	public static access$get_cookies$p($this: GenericResponse): CookieJar;
	public static access$get_cookies$p(...args: any[]): any {
		return GenericResponse.$javaClass.access$get_cookies$p(...args);
	}

}

