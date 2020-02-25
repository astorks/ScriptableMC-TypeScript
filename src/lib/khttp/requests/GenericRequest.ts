declare var Java: any;
import Authorization from '../../khttp/structures/authorization/Authorization.js'
import FileLike from '../../khttp/structures/files/FileLike.js'
import Request from '../../khttp/requests/Request.js'

export default interface GenericRequest {
	getAllowRedirects(): boolean;
	getAuth(): Authorization;
	getBody(): Array<number>;
	getCookies(): any;
	getData(): any;
	getFiles(): Array<FileLike>;
	getHeaders(): any;
	getJson(): any;
	getMethod(): string;
	getParams(): any;
	getStream(): boolean;
	getTimeout(): number;
	getUrl(): string;
}

export default class GenericRequest {
	public static get $javaClass(): any {
		return Java.type('khttp.requests.GenericRequest');
	}

	constructor(method: string, url: string, params: any, headers: any, data: any, json: any, auth: Authorization, cookies: any, timeout: number, allowRedirects: boolean, stream: boolean, files: Array<any>);
	constructor(...args: any[]) {
		return new GenericRequest.$javaClass(...args);
	}

	public static access$getDEFAULT_DATA_HEADERS$cp(): any;
	public static access$getDEFAULT_DATA_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_DATA_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_FORM_HEADERS$cp(): any;
	public static access$getDEFAULT_FORM_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_FORM_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_HEADERS$cp(): any;
	public static access$getDEFAULT_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_JSON_HEADERS$cp(): any;
	public static access$getDEFAULT_JSON_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_JSON_HEADERS$cp(...args);
	}

	public static access$getDEFAULT_UPLOAD_HEADERS$cp(): any;
	public static access$getDEFAULT_UPLOAD_HEADERS$cp(...args: any[]): any {
		return GenericRequest.$javaClass.access$getDEFAULT_UPLOAD_HEADERS$cp(...args);
	}

}

