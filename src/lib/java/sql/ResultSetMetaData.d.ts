export interface ResultSetMetaData {
    isReadOnly(arg0: number): boolean;
    isSigned(arg0: number): boolean;
    isWritable(arg0: number): boolean;
    getScale(arg0: number): number;
    getColumnDisplaySize(arg0: number): number;
    isDefinitelyWritable(arg0: number): boolean;
    getColumnCount(): number;
    getPrecision(arg0: number): number;
    isNullable(arg0: number): number;
    isAutoIncrement(arg0: number): boolean;
    getColumnLabel(arg0: number): string;
    getColumnType(arg0: number): number;
    isCurrency(arg0: number): boolean;
    getTableName(arg0: number): string;
    getCatalogName(arg0: number): string;
    getColumnTypeName(arg0: number): string;
    getSchemaName(arg0: number): string;
    isSearchable(arg0: number): boolean;
    isCaseSensitive(arg0: number): boolean;
    getColumnClassName(arg0: number): string;
    getColumnName(arg0: number): string;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export declare class ResultSetMetaData {
    static get $javaClass(): any;
    static get columnNoNulls(): number;
    static get columnNullable(): number;
    static get columnNullableUnknown(): number;
}
