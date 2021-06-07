export function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}
export function rgba(r, g, b, a = 255) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
export function range(min, max) {
    return Math.random() * (max - min) + min;
}
export function rangeInt(min, max) {
    return Math.round(range(min, max));
}
