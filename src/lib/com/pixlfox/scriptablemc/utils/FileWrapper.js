export default class FileWrapper {
    static get $javaClass() {
        return Java.type('com.pixlfox.scriptablemc.utils.FileWrapper');
    }
    constructor(...args) {
        return new FileWrapper.$javaClass(...args);
    }
}
