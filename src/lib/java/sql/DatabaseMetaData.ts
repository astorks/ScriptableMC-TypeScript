declare var Java: any;
import Connection from '../../java/sql/Connection.js'
import ResultSet from '../../java/sql/ResultSet.js'
import RowIdLifetime from '../../java/sql/RowIdLifetime.js'
import Wrapper from '../../java/sql/Wrapper.js'

export default interface DatabaseMetaData {
	allProceduresAreCallable(): boolean;
	allTablesAreSelectable(): boolean;
	autoCommitFailureClosesAllResultSets(): boolean;
	dataDefinitionCausesTransactionCommit(): boolean;
	dataDefinitionIgnoredInTransactions(): boolean;
	deletesAreDetected(arg0: number): boolean;
	doesMaxRowSizeIncludeBlobs(): boolean;
	generatedKeyAlwaysReturned(): boolean;
	getAttributes(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getBestRowIdentifier(arg0: string, arg1: string, arg2: string, arg3: number, arg4: boolean): ResultSet;
	getCatalogSeparator(): string;
	getCatalogTerm(): string;
	getCatalogs(): ResultSet;
	getClientInfoProperties(): ResultSet;
	getColumnPrivileges(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getConnection(): Connection;
	getCrossReference(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string): ResultSet;
	getDatabaseMajorVersion(): number;
	getDatabaseMinorVersion(): number;
	getDatabaseProductName(): string;
	getDatabaseProductVersion(): string;
	getDefaultTransactionIsolation(): number;
	getDriverMajorVersion(): number;
	getDriverMinorVersion(): number;
	getDriverName(): string;
	getDriverVersion(): string;
	getExportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getExtraNameCharacters(): string;
	getFunctionColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getFunctions(arg0: string, arg1: string, arg2: string): ResultSet;
	getIdentifierQuoteString(): string;
	getImportedKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getIndexInfo(arg0: string, arg1: string, arg2: string, arg3: boolean, arg4: boolean): ResultSet;
	getJDBCMajorVersion(): number;
	getJDBCMinorVersion(): number;
	getMaxBinaryLiteralLength(): number;
	getMaxCatalogNameLength(): number;
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
	getMaxLogicalLobSize(): number;
	getMaxProcedureNameLength(): number;
	getMaxRowSize(): number;
	getMaxSchemaNameLength(): number;
	getMaxStatementLength(): number;
	getMaxStatements(): number;
	getMaxTableNameLength(): number;
	getMaxTablesInSelect(): number;
	getMaxUserNameLength(): number;
	getNumericFunctions(): string;
	getPrimaryKeys(arg0: string, arg1: string, arg2: string): ResultSet;
	getProcedureColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getProcedureTerm(): string;
	getProcedures(arg0: string, arg1: string, arg2: string): ResultSet;
	getPseudoColumns(arg0: string, arg1: string, arg2: string, arg3: string): ResultSet;
	getResultSetHoldability(): number;
	getRowIdLifetime(): RowIdLifetime;
	getSQLKeywords(): string;
	getSQLStateType(): number;
	getSchemaTerm(): string;
	getSchemas(): ResultSet;
	getSchemas(arg0: string, arg1: string): ResultSet;
	getSearchStringEscape(): string;
	getStringFunctions(): string;
	getSuperTables(arg0: string, arg1: string, arg2: string): ResultSet;
	getSuperTypes(arg0: string, arg1: string, arg2: string): ResultSet;
	getSystemFunctions(): string;
	getTablePrivileges(arg0: string, arg1: string, arg2: string): ResultSet;
	getTableTypes(): ResultSet;
	getTables(arg0: string, arg1: string, arg2: string, arg3: Array<string>): ResultSet;
	getTimeDateFunctions(): string;
	getTypeInfo(): ResultSet;
	getUDTs(arg0: string, arg1: string, arg2: string, arg3: Array<number>): ResultSet;
	getURL(): string;
	getUserName(): string;
	getVersionColumns(arg0: string, arg1: string, arg2: string): ResultSet;
	insertsAreDetected(arg0: number): boolean;
	isCatalogAtStart(): boolean;
	isReadOnly(): boolean;
	isWrapperFor(arg0: any): boolean;
	locatorsUpdateCopy(): boolean;
	nullPlusNonNullIsNull(): boolean;
	nullsAreSortedAtEnd(): boolean;
	nullsAreSortedAtStart(): boolean;
	nullsAreSortedHigh(): boolean;
	nullsAreSortedLow(): boolean;
	othersDeletesAreVisible(arg0: number): boolean;
	othersInsertsAreVisible(arg0: number): boolean;
	othersUpdatesAreVisible(arg0: number): boolean;
	ownDeletesAreVisible(arg0: number): boolean;
	ownInsertsAreVisible(arg0: number): boolean;
	ownUpdatesAreVisible(arg0: number): boolean;
	storesLowerCaseIdentifiers(): boolean;
	storesLowerCaseQuotedIdentifiers(): boolean;
	storesMixedCaseIdentifiers(): boolean;
	storesMixedCaseQuotedIdentifiers(): boolean;
	storesUpperCaseIdentifiers(): boolean;
	storesUpperCaseQuotedIdentifiers(): boolean;
	supportsANSI92EntryLevelSQL(): boolean;
	supportsANSI92FullSQL(): boolean;
	supportsANSI92IntermediateSQL(): boolean;
	supportsAlterTableWithAddColumn(): boolean;
	supportsAlterTableWithDropColumn(): boolean;
	supportsBatchUpdates(): boolean;
	supportsCatalogsInDataManipulation(): boolean;
	supportsCatalogsInIndexDefinitions(): boolean;
	supportsCatalogsInPrivilegeDefinitions(): boolean;
	supportsCatalogsInProcedureCalls(): boolean;
	supportsCatalogsInTableDefinitions(): boolean;
	supportsColumnAliasing(): boolean;
	supportsConvert(): boolean;
	supportsConvert(arg0: number, arg1: number): boolean;
	supportsCoreSQLGrammar(): boolean;
	supportsCorrelatedSubqueries(): boolean;
	supportsDataDefinitionAndDataManipulationTransactions(): boolean;
	supportsDataManipulationTransactionsOnly(): boolean;
	supportsDifferentTableCorrelationNames(): boolean;
	supportsExpressionsInOrderBy(): boolean;
	supportsExtendedSQLGrammar(): boolean;
	supportsFullOuterJoins(): boolean;
	supportsGetGeneratedKeys(): boolean;
	supportsGroupBy(): boolean;
	supportsGroupByBeyondSelect(): boolean;
	supportsGroupByUnrelated(): boolean;
	supportsIntegrityEnhancementFacility(): boolean;
	supportsLikeEscapeClause(): boolean;
	supportsLimitedOuterJoins(): boolean;
	supportsMinimumSQLGrammar(): boolean;
	supportsMixedCaseIdentifiers(): boolean;
	supportsMixedCaseQuotedIdentifiers(): boolean;
	supportsMultipleOpenResults(): boolean;
	supportsMultipleResultSets(): boolean;
	supportsMultipleTransactions(): boolean;
	supportsNamedParameters(): boolean;
	supportsNonNullableColumns(): boolean;
	supportsOpenCursorsAcrossCommit(): boolean;
	supportsOpenCursorsAcrossRollback(): boolean;
	supportsOpenStatementsAcrossCommit(): boolean;
	supportsOpenStatementsAcrossRollback(): boolean;
	supportsOrderByUnrelated(): boolean;
	supportsOuterJoins(): boolean;
	supportsPositionedDelete(): boolean;
	supportsPositionedUpdate(): boolean;
	supportsRefCursors(): boolean;
	supportsResultSetConcurrency(arg0: number, arg1: number): boolean;
	supportsResultSetHoldability(arg0: number): boolean;
	supportsResultSetType(arg0: number): boolean;
	supportsSavepoints(): boolean;
	supportsSchemasInDataManipulation(): boolean;
	supportsSchemasInIndexDefinitions(): boolean;
	supportsSchemasInPrivilegeDefinitions(): boolean;
	supportsSchemasInProcedureCalls(): boolean;
	supportsSchemasInTableDefinitions(): boolean;
	supportsSelectForUpdate(): boolean;
	supportsSharding(): boolean;
	supportsStatementPooling(): boolean;
	supportsStoredFunctionsUsingCallSyntax(): boolean;
	supportsStoredProcedures(): boolean;
	supportsSubqueriesInComparisons(): boolean;
	supportsSubqueriesInExists(): boolean;
	supportsSubqueriesInIns(): boolean;
	supportsSubqueriesInQuantifieds(): boolean;
	supportsTableCorrelationNames(): boolean;
	supportsTransactionIsolationLevel(arg0: number): boolean;
	supportsTransactions(): boolean;
	supportsUnion(): boolean;
	supportsUnionAll(): boolean;
	unwrap(arg0: any): any;
	updatesAreDetected(arg0: number): boolean;
	usesLocalFilePerTable(): boolean;
	usesLocalFiles(): boolean;
}

export default class DatabaseMetaData {
	public static get $javaClass(): any {
		return Java.type('java.sql.DatabaseMetaData');
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

	public static get bestRowNotPseudo(): number {
		return DatabaseMetaData.$javaClass.bestRowNotPseudo;
	}

	public static get bestRowPseudo(): number {
		return DatabaseMetaData.$javaClass.bestRowPseudo;
	}

	public static get bestRowSession(): number {
		return DatabaseMetaData.$javaClass.bestRowSession;
	}

	public static get bestRowTemporary(): number {
		return DatabaseMetaData.$javaClass.bestRowTemporary;
	}

	public static get bestRowTransaction(): number {
		return DatabaseMetaData.$javaClass.bestRowTransaction;
	}

	public static get bestRowUnknown(): number {
		return DatabaseMetaData.$javaClass.bestRowUnknown;
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

	public static get functionColumnIn(): number {
		return DatabaseMetaData.$javaClass.functionColumnIn;
	}

	public static get functionColumnInOut(): number {
		return DatabaseMetaData.$javaClass.functionColumnInOut;
	}

	public static get functionColumnOut(): number {
		return DatabaseMetaData.$javaClass.functionColumnOut;
	}

	public static get functionColumnResult(): number {
		return DatabaseMetaData.$javaClass.functionColumnResult;
	}

	public static get functionColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.functionColumnUnknown;
	}

	public static get functionNoNulls(): number {
		return DatabaseMetaData.$javaClass.functionNoNulls;
	}

	public static get functionNoTable(): number {
		return DatabaseMetaData.$javaClass.functionNoTable;
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

	public static get functionReturn(): number {
		return DatabaseMetaData.$javaClass.functionReturn;
	}

	public static get functionReturnsTable(): number {
		return DatabaseMetaData.$javaClass.functionReturnsTable;
	}

	public static get importedKeyCascade(): number {
		return DatabaseMetaData.$javaClass.importedKeyCascade;
	}

	public static get importedKeyInitiallyDeferred(): number {
		return DatabaseMetaData.$javaClass.importedKeyInitiallyDeferred;
	}

	public static get importedKeyInitiallyImmediate(): number {
		return DatabaseMetaData.$javaClass.importedKeyInitiallyImmediate;
	}

	public static get importedKeyNoAction(): number {
		return DatabaseMetaData.$javaClass.importedKeyNoAction;
	}

	public static get importedKeyNotDeferrable(): number {
		return DatabaseMetaData.$javaClass.importedKeyNotDeferrable;
	}

	public static get importedKeyRestrict(): number {
		return DatabaseMetaData.$javaClass.importedKeyRestrict;
	}

	public static get importedKeySetDefault(): number {
		return DatabaseMetaData.$javaClass.importedKeySetDefault;
	}

	public static get importedKeySetNull(): number {
		return DatabaseMetaData.$javaClass.importedKeySetNull;
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

	public static get procedureColumnResult(): number {
		return DatabaseMetaData.$javaClass.procedureColumnResult;
	}

	public static get procedureColumnReturn(): number {
		return DatabaseMetaData.$javaClass.procedureColumnReturn;
	}

	public static get procedureColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureColumnUnknown;
	}

	public static get procedureNoNulls(): number {
		return DatabaseMetaData.$javaClass.procedureNoNulls;
	}

	public static get procedureNoResult(): number {
		return DatabaseMetaData.$javaClass.procedureNoResult;
	}

	public static get procedureNullable(): number {
		return DatabaseMetaData.$javaClass.procedureNullable;
	}

	public static get procedureNullableUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureNullableUnknown;
	}

	public static get procedureResultUnknown(): number {
		return DatabaseMetaData.$javaClass.procedureResultUnknown;
	}

	public static get procedureReturnsResult(): number {
		return DatabaseMetaData.$javaClass.procedureReturnsResult;
	}

	public static get sqlStateSQL(): number {
		return DatabaseMetaData.$javaClass.sqlStateSQL;
	}

	public static get sqlStateSQL99(): number {
		return DatabaseMetaData.$javaClass.sqlStateSQL99;
	}

	public static get sqlStateXOpen(): number {
		return DatabaseMetaData.$javaClass.sqlStateXOpen;
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

	public static get tableIndexStatistic(): number {
		return DatabaseMetaData.$javaClass.tableIndexStatistic;
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

	public static get typePredBasic(): number {
		return DatabaseMetaData.$javaClass.typePredBasic;
	}

	public static get typePredChar(): number {
		return DatabaseMetaData.$javaClass.typePredChar;
	}

	public static get typePredNone(): number {
		return DatabaseMetaData.$javaClass.typePredNone;
	}

	public static get typeSearchable(): number {
		return DatabaseMetaData.$javaClass.typeSearchable;
	}

	public static get versionColumnNotPseudo(): number {
		return DatabaseMetaData.$javaClass.versionColumnNotPseudo;
	}

	public static get versionColumnPseudo(): number {
		return DatabaseMetaData.$javaClass.versionColumnPseudo;
	}

	public static get versionColumnUnknown(): number {
		return DatabaseMetaData.$javaClass.versionColumnUnknown;
	}

}

