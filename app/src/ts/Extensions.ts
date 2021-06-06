export function rgb(r: number, g: number, b: number): string {
	return `rgb(${r}, ${g}, ${b})`;
}
export function rgba(r: number, g: number, b: number, a: number | 255 = 255): string {
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}