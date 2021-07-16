const theme = {
	light: "#F2F2F2",
	lightAccent: "#9aB4D0",
	main: "#325A8D",
	darkAccent: "#202E41",
	dark: "#0D0D0D",
	warn: "#854040",
};

export interface Theme {
	theme: {
		light: string;
		lightAccent: string;
		main: string;
		darkAccent: string;
		dark: string;
		warn: string;
	};
}

export default theme;
