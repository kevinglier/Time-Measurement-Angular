export class TimeTableEntry {
    /** Description of the Entry */
    text: string;
    /** The date (with time) when the action was started. */
    time: Date;
    /** The duration (in seconds) the action took. */
    duration: number;

    /**
     * @todo create pipe for markup
     */
    getTextFormatted() {
        return this.text;
    }
    /**
     * @todo create pipe for markup
     */
    getTimeFormatted() {
        return this.time.toLocaleTimeString();
    }
    /**
     * @todo create pipe for markup
     */
    getDurationFormatted() {
        var m = parseInt((this.duration / 60) + '');
        var s = this.duration % 60;
        return (m ? m + 'm' : '') + s + 's';
    }
}
