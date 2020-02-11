export default class File {
    static get $javaClass() {
        return Java.type('java.io.File');
    }
    constructor(...args) {
        return new File.$javaClass(...args);
    }
    static get separatorChar() {
        return File.$javaClass.separatorChar;
    }
    static get separator() {
        return File.$javaClass.separator;
    }
    static get pathSeparatorChar() {
        return File.$javaClass.pathSeparatorChar;
    }
    static get pathSeparator() {
        return File.$javaClass.pathSeparator;
    }
    static listRoots(...args) {
        return File.$javaClass.listRoots(...args);
    }
    static createTempFile(...args) {
        return File.$javaClass.createTempFile(...args);
    }
}
