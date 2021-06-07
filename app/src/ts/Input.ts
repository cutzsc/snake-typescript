export const KEY = {
	W:			87,
	D:			68,
	A:			65,
	S:			83,
	RESTART:	81
};

export const input = {
	up:			false,
	down:		false,
	left:		false,
	right:		false,
	restart:	false
};

export function keyDown(evt: KeyboardEvent): void {
	const code = evt.keyCode;
	switch(code) {
		case KEY.W:			input.up		= true; break;
		case KEY.S:			input.down		= true; break;
		case KEY.A:			input.left		= true; break;
		case KEY.D:			input.right		= true; break;
		case KEY.RESTART:	input.restart	= true; break;
	}
}

export function keyUp(evt: KeyboardEvent): void {
	const code = evt.keyCode;
	switch(code) {
		case KEY.W:			input.up		= false; break;
		case KEY.S:			input.down		= false; break;
		case KEY.A:			input.left		= false; break;
		case KEY.D:			input.right		= false; break;
		case KEY.RESTART: 	input.restart	= false; break;
	}
}