export default interface Note$Tone {
    isSharpable(): boolean;
    isSharped(id: number): boolean;
    getId(): number;
    getId(sharped: boolean): number;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class Note$Tone {
    static get $javaClass(): any;
    static get G(): Note$Tone;
    static get A(): Note$Tone;
    static get B(): Note$Tone;
    static get C(): Note$Tone;
    static get D(): Note$Tone;
    static get E(): Note$Tone;
    static get F(): Note$Tone;
}
