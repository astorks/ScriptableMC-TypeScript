export default interface ResultSetMetaData {
    isReadOnly(arg0: number): boolean;
    isSigned(arg0: number): boolean;
    isWritable(arg0: number): boolean;
    getScale(arg0: number): number;
    getColumnCount(): number;
    isNullable(arg0: number): number;
    isCaseSensitive(arg0: number): boolean;
    getCatalogName(arg0: number): string;
    getColumnType(arg0: number): number;
    getColumnName(arg0: number): string;
    getSchemaName(arg0: number): string;
    getTableName(arg0: number): string;
    getColumnClassName(arg0: number): string;
    getPrecision(arg0: number): number;
    getColumnLabel(arg0: number): string;
    isSearchable(arg0: number): boolean;
    getColumnTypeName(arg0: number): string;
    isCurrency(arg0: number): boolean;
    isAutoIncrement(arg0: number): boolean;
    isDefinitelyWritable(arg0: number): boolean;
    getColumnDisplaySize(arg0: number): number;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class ResultSetMetaData {
    static get $javaClass(): any;
    static get columnNoNulls(): number;
    static get columnNullable(): number;
    static get columnNullableUnknown(): number;
}
