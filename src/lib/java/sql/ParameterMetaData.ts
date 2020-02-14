declare var Java: any;
import Wrapper from '../../java/sql/Wrapper.js'

export default interface ParameterMetaData {
	getParameterClassName(arg0: number): string;
	getParameterCount(): number;
	getParameterMode(arg0: number): number;
	getParameterType(arg0: number): number;
	getParameterTypeName(arg0: number): string;
	getPrecision(arg0: number): number;
	getScale(arg0: number): number;
	isNullable(arg0: number): number;
	isSigned(arg0: number): boolean;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class ParameterMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.ParameterMetaData');
	}

	public static get parameterModeIn(): number {
		return ParameterMetaData.$javaClass.parameterModeIn;
	}

	public static get parameterModeInOut(): number {
		return ParameterMetaData.$javaClass.parameterModeInOut;
	}

	public static get parameterModeOut(): number {
		return ParameterMetaData.$javaClass.parameterModeOut;
	}

	public static get parameterModeUnknown(): number {
		return ParameterMetaData.$javaClass.parameterModeUnknown;
	}

	public static get parameterNoNulls(): number {
		return ParameterMetaData.$javaClass.parameterNoNulls;
	}

	public static get parameterNullable(): number {
		return ParameterMetaData.$javaClass.parameterNullable;
	}

	public static get parameterNullableUnknown(): number {
		return ParameterMetaData.$javaClass.parameterNullableUnknown;
	}

}

