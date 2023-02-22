export const thousands = val => {
    try {
        return parseInt(val).toLocaleString()
    } catch (e) {
        return '---'
    }
}
