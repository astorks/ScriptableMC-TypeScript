export default class MemoryKey {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.memory.MemoryKey');
    }
    static get HOME() {
        return MemoryKey.$javaClass.HOME;
    }
    static get MEETING_POINT() {
        return MemoryKey.$javaClass.MEETING_POINT;
    }
    static get JOB_SITE() {
        return MemoryKey.$javaClass.JOB_SITE;
    }
    static get LAST_SLEPT() {
        return MemoryKey.$javaClass.LAST_SLEPT;
    }
    static get LAST_WOKEN() {
        return MemoryKey.$javaClass.LAST_WOKEN;
    }
    static get LAST_WORKED_AT_POI() {
        return MemoryKey.$javaClass.LAST_WORKED_AT_POI;
    }
    static getByKey(...args) {
        return MemoryKey.$javaClass.getByKey(...args);
    }
    static values(...args) {
        return MemoryKey.$javaClass.values(...args);
    }
}
