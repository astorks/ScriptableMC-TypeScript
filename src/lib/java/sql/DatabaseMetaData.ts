declare var Java: any;
import Connection from '../../java/sql/Connection.js'
import ResultSet from '../../java/sql/ResultSet.js'
import RowIdLifetime from '../../java/sql/RowIdLifetime.js'
import Wrapper from '../../java/sql/Wrapper.js'

export default interface DatabaseMetaData {
	getResultSetHoldability(): number;
	allProceduresAreCallable(): boolean;
	allTablesAreSelectable(): boolean;
	getUserName(): string;
	nullsAreSortedHigh(): boolean;
	nullsAreSortedLow(): boolean;
	nullsAreSortedAtStart(): boolean;
	nullsAreSortedAtEnd(): boolean;
	getDatabaseProductName(): string;
	getDatabaseProductVersion(): string;
	getDriverName(): string;
	getDriverVersion(): string;
	getDriverMajorVersion(): number;
	getDriverMinorVersion(): number;
	usesLocalFiles(): boolean;
	usesLocalFilePerTable(): boolean;
	supportsMixedCaseIdentifiers(): boolean;
	storesUpperCaseIdentifiers(): boolean;
	storesLowerCaseIdentifiers(): boolean;
	storesMixedCaseIdentifiers(): boolean;
	supportsMixedCaseQuotedIdentifiers(): boolean;
	storesUpperCaseQuotedIdentifiers(): boolean;
	storesLowerCaseQuotedIdentifiers(): boolean;
	storesMixedCaseQuotedIdentifiers(): boolean;
	getIdentifierQuoteString(): string;
	getSQLKeywords(): string;
	getNumericFunctions(): string;
	getStringFunctions(): string;
	getSystemFunctions(): string;
	getTimeDateFunctions(): string;
	getSearchStringEscape(): string;
	getExtraNameCharacters(): string;
	supportsAlterTableWithAddColumn(): boolean;
	supportsAlterTableWithDropColumn(): boolean;
	supportsColumnAliasing(): boolean;
	nullPlusNonNullIsNull(): boolean;
	supportsConvert(arg0: number, arg1: number): boolean;
	supportsConvert(): boolean;
	supportsTableCorrelationNames(): boolean;
	supportsDifferentTableCorrelationNames(): boolean;
	supportsExpressionsInOrderBy(): boolean;
	supportsOrderByUnrelated(): boolean;
	supportsGroupBy(): boolean;
	supportsGroupByUnrelated(): boolean;
	supportsGroupByBeyondSelect(): boolean;
	supportsLikeEscapeClause(): boolean;
	supportsMultipleResultSets(): boolean;
	supportsMultipleTransactions(): boolean;
	supportsNonNullableColumns(): boolean;
	supportsMinimumSQLGrammar(): boolean;
	supportsCoreSQLGrammar(): boolean;
	supportsExtendedSQLGrammar(): boolean;
	supportsANSI92EntryLevelSQL(): boolean;
	supportsANSI92IntermediateSQL(): boolean;
	supportsANSI92FullSQL(): boolean;
	supportsIntegrityEnhancementFacility(): boolean;
	supportsOuterJoins(): boolean;
	supportsFullOuterJoins(): boolean;
	supportsLimitedOuterJoins(): boolean;
	getSchemaTerm(): string;
	getProcedureTerm(): string;
	getCatalogTerm(): string;
	isCatalogAtStart(): boolean;
	getCatalogSeparator(): string;
	supportsSchemasInDataManipulation(): boolean;
	supportsSchemasInProcedureCalls(): boolean;
	supportsSchemasInTableDefinitions(): boolean;
	supportsSchemasInIndexDefinitions(): boolean;
	supportsSchemasInPrivilegeDefinitions(): boolean;
	supportsCatalogsInDataManipulation(): boolean;
	supportsCatalogsInProcedureCalls(): boolean;
	supportsCatalogsInTableDefinitions(): boolean;
	supportsCatalogsInIndexDefinitions(): boolean;
	supportsCatalogsInPrivilegeDefinitions(): boolean;
	supportsPositionedDelete(): boolean;
	supportsPositionedUpdate(): boolean;
	supportsSelectForUpdate(): boolean;
	supportsStoredProcedures(): boolean;
	supportsSubqueriesInComparisons(): boolean;
	supportsSubqueriesInExists(): boolean;
	supportsSubqueriesInIns(): boolean;
	supportsSubqueriesInQuantifieds(): boolean;
	supportsCorrelatedSubqueries(): boolean;
	supportsUnion(): boolean;
	supportsUnionAll(): boolean;
	supportsOpenCursorsAcrossCommit(): boolean;
	supportsOpenCursorsAcrossRollback(): boolean;
	supportsOpenStatementsAcrossCommit(): boolean;
	supportsOpenStatementsAcrossRollback(): boolean;
	getMaxBinaryLiteralLength(): number;
	getMaxCharLiteralLength(): number;
	getMaxColumnNameLength(): number;
	getMaxColumnsInGroupBy(): number;
	getMaxColumnsInIndex(): number;
	getMaxColumnsInOrderBy(): number;
	getMaxColumnsInSelect(): number;
	getMaxColumnsInTable(): number;
	getMaxConnections(): number;
	getMaxCursorNameLength(): number;
	getMaxIndexLength(): number;
	getMaxSchemaNameLength(): number;
	getMaxProcedureNameLength(): number;
	getMaxCatalogNameLength(): number;
	getMaxRowSize(): number;
	doesMaxRowSizeIncludeBlobs(): boolean;
	getMaxStatementLength(): number;
	getMaxStatements(): number;
	getMaxTableNameLength(): number;
	getMaxTablesInSelect(): number;
	getMaxUserNameLength(): number;
	getDefaultTransactionIsolation(): number;
	supportsTransactions(): boolean;
	supportsTransactionIsolationLevel(arg0: number): boolean;
	supportsDataDefinitionAndDataManipulationTransactions(): boolean;
	supportsDataManipulationTransactionsOnly(): boolean;
	dataDefinitionCausesTransactionCommit(): boolean;
	dataDefinitionIgnoredInTransactions(): boolean;
	getProcedures(arg0: string, arg1: string, arg2: string): ResultSet;
	getProcedureColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getTables(arg0: string, arg1: string, arg2: string, arg3: Array<string>): ResultSet;
	getSchemas(arg0: string, arg1: string): ResultSet;
	getSchemas(): ResultSet;
	getCatalogs(): ResultSet;
	getTableTypes(): ResultSet;
	getColumnPrivileges(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getTablePrivileges(arg0: string, arg1: string, arg2: string): ResultSet;
	getBestRowIdentifier(arg0: string, arg1: string, arg2: string, arg3: number, arg4: boolean): ResultSet;
	getVersionColumns(arg0: string, arg1: string, arg2: string): ResultSet;
	getPrimaryKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getImportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getExportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getCrossReference(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): ResultSet;
	getTypeInfo(): ResultSet;
	getIndexInfo(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean): ResultSet;
	supportsResultSetType(arg0: number): boolean;
	supportsResultSetConcurrency(arg0: number, arg1: number): boolean;
	ownUpdatesAreVisible(arg0: number): boolean;
	ownDeletesAreVisible(arg0: number): boolean;
	ownInsertsAreVisible(arg0: number): boolean;
	othersUpdatesAreVisible(arg0: number): boolean;
	othersDeletesAreVisible(arg0: number): boolean;
	othersInsertsAreVisible(arg0: number): boolean;
	updatesAreDetected(arg0: number): boolean;
	deletesAreDetected(arg0: number): boolean;
	insertsAreDetected(arg0: number): boolean;
	supportsBatchUpdates(): boolean;
	getUDTs(arg0: string, arg1: string, arg2: string, arg3: Array<number>): ResultSet;
	supportsSavepoints(): boolean;
	supportsNamedParameters(): boolean;
	supportsMultipleOpenResults(): boolean;
	supportsGetGeneratedKeys(): boolean;
	getSuperTypes(arg0: string, arg1: string, arg2: string): ResultSet;
	getSuperTables(arg0: string, arg1: string, arg2: string): ResultSet;
	supportsResultSetHoldability(arg0: number): boolean;
	getDatabaseMajorVersion(): number;
	getDatabaseMinorVersion(): number;
	getJDBCMajorVersion(): number;
	getJDBCMinorVersion(): number;
	getSQLStateType(): number;
	locatorsUpdateCopy(): boolean;
	supportsStatementPooling(): boolean;
	getRowIdLifetime(): RowIdLifetime;
	supportsStoredFunctionsUsingCallSyntax(): boolean;
	autoCommitFailureClosesAllResultSets(): boolean;
	getClientInfoProperties(): ResultSet;
	getFunctions(arg0: string, arg1: string, arg2: string): ResultSet;
	getFunctionColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getPseudoColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	generatedKeyAlwaysReturned(): boolean;
	getMaxLogicalLobSize(): number;
	supportsRefCursors(): boolean;
	getConnection(): Connection;
	getColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getURL(): string;
	getAttributes(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	isReadOnly(): boolean;
	isWrapperFor(arg0: any): boolean;
	unwrap(arg0: any): any;
}

export default class DatabaseMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.DatabaseMetaData');
	}
	public static get procedureResultUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureResultUnknown;
	}
	public static get procedureNoResult(): number {
		return DatabaseMetaData.$javaClass.procedureNoResult;
	}
	public static get procedureReturnsResult(): number {
		return DatabaseMetaData.$javaClass.procedureReturnsResult;
	}
	public static get procedureColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureColumnUnknown;
	}
	public static get procedureColumnIn(): number {
		return DatabaseMetaData.$javaClass.procedureColumnIn;
	}
	public static get procedureColumnInOut(): number {
		return DatabaseMetaData.$javaClass.procedureColumnInOut;
	}
	public static get procedureColumnOut(): number {
		return DatabaseMetaData.$javaClass.procedureColumnOut;
	}
	public static get procedureColumnReturn(): number {
		return DatabaseMetaData.$javaClass.procedureColumnReturn;
	}
	public static get procedureColumnResult(): number {
		return DatabaseMetaData.$javaClass.procedureColumnResult;
	}
	public static get procedureNoNulls(): number {
		return DatabaseMetaData.$javaClass.procedureNoNulls;
	}
	public static get procedureNullable(): number {
		return DatabaseMetaData.$javaClass.procedureNullable;
	}
	public static get procedureNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureNullableUnknown;
	}
	public static get columnNoNulls(): number {
		return DatabaseMetaData.$javaClass.columnNoNulls;
	}
	public static get columnNullable(): number {
		return DatabaseMetaData.$javaClass.columnNullable;
	}
	public static get columnNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.columnNullableUnknown;
	}
	public static get bestRowTemporary(): number {
		return DatabaseMetaData.$javaClass.bestRowTemporary;
	}
	public static get bestRowTransaction(): number {
		return DatabaseMetaData.$javaClass.bestRowTransaction;
	}
	public static get bestRowSession(): number {
		return DatabaseMetaData.$javaClass.bestRowSession;
	}
	public static get bestRowUnknown(): number {
		return DatabaseMetaData.$javaClass.bestRowUnknown;
	}
	public static get bestRowNotPseudo(): number {
		return DatabaseMetaData.$javaClass.bestRowNotPseudo;
	}
	public static get bestRowPseudo(): number {
		return DatabaseMetaData.$javaClass.bestRowPseudo;
	}
	public static get versionColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.versionColumnUnknown;
	}
	public static get versionColumnNotPseudo(): number {
		return DatabaseMetaData.$javaClass.versionColumnNotPseudo;
	}
	public static get versionColumnPseudo(): number {
		return DatabaseMetaData.$javaClass.versionColumnPseudo;
	}
	public static get importedKeyCascade(): number {
		return DatabaseMetaData.$javaClass.importedKeyCascade;
	}
	public static get importedKeyRestrict(): number {
		return DatabaseMetaData.$javaClass.importedKeyRestrict;
	}
	public static get importedKeySetNull(): number {
		return DatabaseMetaData.$javaClass.importedKeySetNull;
	}
	public static get importedKeyNoAction(): number {
		return DatabaseMetaData.$javaClass.importedKeyNoAction;
	}
	public static get importedKeySetDefault(): number {
		return DatabaseMetaData.$javaClass.importedKeySetDefault;
	}
	public static get importedKeyInitiallyDeferred(): number {
		return DatabaseMetaData.$javaClass.importedKeyInitiallyDeferred;
	}
	public static get importedKeyInitiallyImmediate(): number {
		return DatabaseMetaData.$javaClass.importedKeyInitiallyImmediate;
	}
	public static get importedKeyNotDeferrable(): number {
		return DatabaseMetaData.$javaClass.importedKeyNotDeferrable;
	}
	public static get typeNoNulls(): number {
		return DatabaseMetaData.$javaClass.typeNoNulls;
	}
	public static get typeNullable(): number {
		return DatabaseMetaData.$javaClass.typeNullable;
	}
	public static get typeNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.typeNullableUnknown;
	}
	public static get typePredNone(): number {
		return DatabaseMetaData.$javaClass.typePredNone;
	}
	public static get typePredChar(): number {
		return DatabaseMetaData.$javaClass.typePredChar;
	}
	public static get typePredBasic(): number {
		return DatabaseMetaData.$javaClass.typePredBasic;
	}
	public static get typeSearchable(): number {
		return DatabaseMetaData.$javaClass.typeSearchable;
	}
	public static get tableIndexStatistic(): number {
		return DatabaseMetaData.$javaClass.tableIndexStatistic;
	}
	public static get tableIndexClustered(): number {
		return DatabaseMetaData.$javaClass.tableIndexClustered;
	}
	public static get tableIndexHashed(): number {
		return DatabaseMetaData.$javaClass.tableIndexHashed;
	}
	public static get tableIndexOther(): number {
		return DatabaseMetaData.$javaClass.tableIndexOther;
	}
	public static get attributeNoNulls(): number {
		return DatabaseMetaData.$javaClass.attributeNoNulls;
	}
	public static get attributeNullable(): number {
		return DatabaseMetaData.$javaClass.attributeNullable;
	}
	public static get attributeNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.attributeNullableUnknown;
	}
	public static get sqlStateXOpen(): number {
		return DatabaseMetaData.$javaClass.sqlStateXOpen;
	}
	public static get sqlStateSQL(): number {
		return DatabaseMetaData.$javaClass.sqlStateSQL;
	}
	public static get sqlStateSQL99(): number {
		return DatabaseMetaData.$javaClass.sqlStateSQL99;
	}
	public static get functionColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.functionColumnUnknown;
	}
	public static get functionColumnIn(): number {
		return DatabaseMetaData.$javaClass.functionColumnIn;
	}
	public static get functionColumnInOut(): number {
		return DatabaseMetaData.$javaClass.functionColumnInOut;
	}
	public static get functionColumnOut(): number {
		return DatabaseMetaData.$javaClass.functionColumnOut;
	}
	public static get functionReturn(): number {
		return DatabaseMetaData.$javaClass.functionReturn;
	}
	public static get functionColumnResult(): number {
		return DatabaseMetaData.$javaClass.functionColumnResult;
	}
	public static get functionNoNulls(): number {
		return DatabaseMetaData.$javaClass.functionNoNulls;
	}
	public static get functionNullable(): number {
		return DatabaseMetaData.$javaClass.functionNullable;
	}
	public static get functionNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.functionNullableUnknown;
	}
	public static get functionResultUnknown(): number {
		return DatabaseMetaData.$javaClass.functionResultUnknown;
	}
	public static get functionNoTable(): number {
		return DatabaseMetaData.$javaClass.functionNoTable;
	}
	public static get functionReturnsTable(): number {
		return DatabaseMetaData.$javaClass.functionReturnsTable;
	}
}

