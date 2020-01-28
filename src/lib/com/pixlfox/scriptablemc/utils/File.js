export class File {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.utils.File');
    }
    constructor(...args) {
        return new File.$javaClass(...args);
    }
}
//# sourceMappingURL=File.js.map