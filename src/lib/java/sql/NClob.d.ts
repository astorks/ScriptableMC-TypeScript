import { Clob } from '../../java/sql/Clob.js';
export interface NClob {
    length(): number;
    position(arg0: Clob, arg1: number): number;
    position(arg0: string, arg1: number): number;
    truncate(arg0: number): void;
    free(): void;
    setAsciiStream(arg0: number): any;
    setString(arg0: number, arg1: string, arg2: number, arg3: number): number;
    setString(arg0: number, arg1: string): number;
    setCharacterStream(arg0: number): any;
    getAsciiStream(): any;
    getCharacterStream(arg0: number, arg1: number): any;
    getCharacterStream(): any;
    getSubString(arg0: number, arg1: number): string;
}
export declare class NClob {
    static get $javaClass(): any;
}
