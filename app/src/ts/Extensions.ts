export function rgb(r: number, g: number, b: number): string {
	return `rgb(${r}, ${g}, ${b})`;
}

export function rgba(r: number, g: number, b: number, a: number | 255 = 255): string {
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function range(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

export function rangeInt(min: number, max: number): number {
	return Math.round(range(min, max));
}