export default interface ResultSetMetaData {
    isReadOnly(arg0: number): boolean;
    isWritable(arg0: number): boolean;
    isSigned(arg0: number): boolean;
    getScale(arg0: number): number;
    getColumnDisplaySize(arg0: number): number;
    isDefinitelyWritable(arg0: number): boolean;
    getPrecision(arg0: number): number;
    getTableName(arg0: number): string;
    getCatalogName(arg0: number): string;
    getColumnClassName(arg0: number): string;
    getColumnName(arg0: number): string;
    isNullable(arg0: number): number;
    getColumnLabel(arg0: number): string;
    isSearchable(arg0: number): boolean;
    getColumnTypeName(arg0: number): string;
    isCaseSensitive(arg0: number): boolean;
    isCurrency(arg0: number): boolean;
    getColumnCount(): number;
    getColumnType(arg0: number): number;
    getSchemaName(arg0: number): string;
    isAutoIncrement(arg0: number): boolean;
    unwrap(arg0: any): any;
    isWrapperFor(arg0: any): boolean;
}
export default class ResultSetMetaData {
    static get $javaClass(): any;
    static get columnNoNulls(): number;
    static get columnNullable(): number;
    static get columnNullableUnknown(): number;
}