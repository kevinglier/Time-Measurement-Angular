export class TimeTableEntry {
    /** Description of the Entry */
    text: string;
    /** The date (with time) when the action was started. */
    time: Date;
    /** The duration (in seconds) the action took. */
    duration: number;
    /** It is an entry managed by the system with should be handled as a special item (e.g. no rights to edit time/duration) */
    isSystemEntry: boolean;
}
