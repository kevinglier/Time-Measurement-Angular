export class TimeTableEntry {
    /** Description of the Entry */
    text: string;
    /** The date (with time) when the action was started. */
    time: Date;
    /** The duration (in seconds) the action took. */
    duration: number;
}
