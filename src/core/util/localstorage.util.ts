export const setLocalStorage = (key: string, value: string | any): void => {
    localStorage.setItem(key, value);
}

export const getLocalStorage = (key: string): any => {
    return localStorage.getItem(key);
}