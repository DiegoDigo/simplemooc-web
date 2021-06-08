export const capitalize = (value: string) => {
    value = value?.toLowerCase()
    return value?.charAt(0).toUpperCase() + value?.slice(1)
}