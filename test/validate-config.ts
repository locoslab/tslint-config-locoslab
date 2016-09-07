// check that config can be correctly parsed by tslint

function is123(s: string): boolean {
	return s === '123'
}

const a = '123'
let b = 1
if (is123(a)) {
	b = 2
}
