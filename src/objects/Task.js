export default class Task {
    static ids = 0
    constructor(what, repeat,duedate,duetime,addlist) {
        this.id = ++Task.ids
        this.what = what
        this.repeat = repeat
        this.duedate= duedate
        this.duetime= duetime
        this.addlist= addlist
    }
}