export const setLocalStorage = (key: string, value: string | any): void => {
    sessionStorage.setItem(key, value);
}

export const getLocalStorage = (key: string): any => {
    return sessionStorage.getItem(key);
}