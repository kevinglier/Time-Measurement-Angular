/** General settings for the time measurement. */
export interface TimeMeasurementSettings {
    /** Timer specific settings */
    timer: {
        /** Type of the timer */
        type: TimerType,
        /** Preset timer unit */
        unit: TimerUnit,
        /** If the timer unit it "custom", the value in seconds that will be used as the timers start value. */
        customValue: number
    },
    /** The URL to the soundfile that will be played, when the timer is done. */
    soundFile: string
}

/** The timers type */
export enum TimerType {
    /** Normal timer counting from a set value down to zero. */
    timer = 0,
    /** A never ending timer, that counts from zero upwards, that can be paused and stopped by the user. */
    counter = 1
}

/** The timer unit, that is the start value of the timer */
export enum TimerUnit {
    /** A pomodoro are 25 minutes */
    pomodoro,
    /** A hours (60 minutes) */
    hour,
    /** Any value. You have to set "customValue" */
    custom
}