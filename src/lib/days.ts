export enum Days {
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday',
    SUNDAY = 'Sunday',
};

export const getRandomDay = (): Days => {
    const keys = Object.keys(Days);
    const key = keys[Math.floor(Math.random() * keys.length)]
    return Days[key as keyof typeof Days];
}

/**
 * Returns the day of the week by index. Monday is index 0.
 * @param index 
 * @returns 
 */
export const getDayByIndex = (index: number): Days => {
    const keys = Object.keys(Days);
    return Days[keys[index] as keyof typeof Days];
}